const { Router } = require('express')
const router = Router()

router.get('/', function(req, res) {
    res.send('hello world 2 работают пути ');
    console.log(req.path)
});

router.get('/1/', function(req, res) {
    res.send('page1');
});

router.get('/2/', function(req, res) {
    res.send('page2');
});

router.get('/3/', function(request, responce ) {
    responce.send('page4');
});

router.get('/4/', function(request, responce) {
    responce.send('page5');
});

module.exports = router