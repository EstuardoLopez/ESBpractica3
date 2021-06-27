var express = require('express');
//var ObjectID = require('mongodb').ObjectID;
var config = require('../Config/config');
var router = express.Router();
const axios = require('axios');

const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

//var MongoClient = require('mongodb').MongoClient;

router.get('/', function (req, res) {
    var url =  config.urlAdmin + config.services.admin.raiz;
    console.log(url);
    axios.get(url).then( res_ => {
        //console.log(res_.status);
        if(res_.status == 200){
            res.send(res_.data);
        }else{
            res.send('Error al consumir servico' + url);
        }
    });
});

router.post('/registrar', function(req, res){
    var url =  config.urlAdmin + config.services.admin.registro;
    var url2 =  config.urlUser + config.services.user.registro;
    var nuevoUsuario = req.body;
    console.log(url2);
    console.log(nuevoUsuario);
    axios.post(url2,nuevoUsuario).then( res_ => {
        //console.log(res_.status);
        if(res_.status == 200){
            res.send(res_.data);
        }else{
            res.send('Error al consumir servico' + url);
        }
    });
});

router.post('/login', function(req, res){
    var url =  config.urlUser + config.services.user.login;
    var nuevoUsuario = req.body;
    console.log(url);
    //console.log(nuevoUsuario);
    axios.post(url,nuevoUsuario).then( res_ => {
        //console.log(res_.status);
        if(res_.status == 200){
            res.send(res_.data);
        }else{
            res.send('Error al consumir servico' + url);
        }
    });
});

router.get('/get-libros', function(req, res){
    var url =  config.urlEditorial + config.services.editorial.obtenerLibros;
    var editorial = req.query.data;
    //let params = new HttpParams().set("data", editorial); 
    console.log(url);
    //console.log(req.body);
    //console.log('req.query.data', req.query.data);
    //let params = new HttpParams().set("data", objeto);  
    //var nuevoUsuario = req.body;
    //res.status(200).send('obtenido');
    
    //console.log(nuevoUsuario);
    axios.get(url,{ params: editorial }).then( res_ => {
        //console.log(res_.status);
        if(res_.status == 200){
            res.send(res_.data);
        }else{
            res.send('Error al consumir servico' + url);
        }
    });
});

router.post('/add-libro', function(req, res){
    var url =  config.urlEditorial + config.services.editorial.insertarLibro;
    var nuevoLibro = req.body;
    console.log(req);
    console.log(url);
    //console.log(nuevoUsuario);
    axios.post(url,nuevoLibro).then( res_ => {
        //console.log(res_.status);
        if(res_.status == 200){
            res.send(res_.data);
        }else{
            res.send('Error al consumir servico' + url);
        }
    });
});



module.exports = router;