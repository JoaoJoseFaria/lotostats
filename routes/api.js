var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET chaves. */
router.get('/chave/', function(req, res, next) {
    Chave.find(function (err, chaves) {
      if (err) return console.error(err);
      res.send(chaves);
    })
});

/* POST add chave */
router.post('/chave/', function(req, res, next){
    var aux = {
        "sorteio": req.body.sorteio,
        "ano": req.body.ano,
        "data": req.body.data,
        "num1": req.body.num1,
        "num2": req.body.num2,
        "num3": req.body.num3,
        "num4": req.body.num4,
        "num5": req.body.num5,
        "est1": req.body.est1,
        "est2": req.body.est2
    }
    var chave = new Chave(aux);
    chave.save(function(err, chave){
        if (err) return console.error(err);
        res.send(chave);
    });
})

var chaveSchemma = mongoose.Schema({
    sorteio: Number,
    ano: Number,
    data: { type: Date, default: Date.now },
    num1: Number,
    num2: Number,
    num3: Number,
    num4: Number,
    num5: Number,
    est1: Number,
    est2: Number
});

var Chave = mongoose.model('chave', chaveSchemma);

module.exports = router;
