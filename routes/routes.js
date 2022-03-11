const { Router } = require('express')
const router = Router()

//req.ip - IP адрес пользователя
//req.query - содержит объект  параметров пример {get1: '1', get2: '2'}
//req.path - адрес без протокола, хоста, порта и строки запроса
//req.url - получить запрошенный адрес с путем и строкой запроса
//res.redirect('/'); перенаправление на другую страницу  По умолчанию код редиректа будет 302 (найдено) res.redirect(301, '/');
//res.type('text/plain'); type можно сменить тип ответа
router.get('/', function(req, res) {
    res.type('text/plain');
    res.send('hello world 2 работают пути ');//возращаем ответ
    //res.status(403).send('hello world');
    console.log(req.path)
    console.log(req.url)
    console.log(req.query)
    console.log(res.type)
});
router.get('/page/sfdsdf/', function(req, res) {
    res.redirect(301, '/');
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
router.use(function(req, res) {
    res.status(404).send('not found');
});
module.exports = router