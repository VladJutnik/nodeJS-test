const {Router} = require('express')
const router = Router()

//req.ip - IP адрес пользователя
//req.query - содержит объект  параметров пример {get1: '1', get2: '2'}
//req.path - адрес без протокола, хоста, порта и строки запроса
//req.url - получить запрошенный адрес с путем и строкой запроса
//res.redirect('/'); перенаправление на другую страницу  По умолчанию код редиректа будет 302 (найдено) res.redirect(301, '/');
//res.type('text/plain'); type можно сменить тип ответа
router.get('/', function (req, res) {
    res.type('text/plain');
    res.send('hello world 2 работают пути ');//возращаем ответ
    //res.status(403).send('hello world');
    console.log(req.path)
    console.log(req.url)
    console.log(req.query)
    console.log(res.type)
});
router.get('/page/sfdsdf/', function (req, res) {
    res.redirect(301, '/');
});
router.get('/1/:ggg', function (req, res) {
    let num = req.params.ggg;
    if (num >= 1 && num <= 9)
    {
        res.send('your num: ' + num);
    }
    else
    {
        res.status(404).send('not found');
    }
    //res.send(num);
});

router.get('/2/', function (req, res) {
    res.send('page2');
});

router.get('/3/', function (request, responce) {
    responce.send('page4');
});

router.get('/4/', function (request, responce) {
    responce.send('page5');
});

///:animal/about
router.get('/:animal/about', function (req, res) {
    // here we have bird or fish in req.params.animal
    if (req.params.animal == 'bird')
    {
        res.send('Birds can fly');
    }
    else if (req.params.animal == 'fish')
    {
        res.send('Fish can swim');
    }
    else
    {
        res.send('Unknown animal');
    }
});

router.get('/about/:param1/:param2', function (req, res) {
    //then you can call this handler  through /about/1/sometext get these params from request object:
    console.log(req.params.param1, req.params.param2); // 1, 'sometext'
    res.send('About birds');
});

module.exports = router