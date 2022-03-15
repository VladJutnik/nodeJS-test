const express = require('express')
const Routes = require('./routes/routes')

let app = express();
app.use(Routes)
app.get('/p/:tagId', function(req, res) {
    res.send("tagId is set to " + req.params.tagId);
});
app.get('/about', function (req, res) {
    res.send('About this wiki');
})
app.use(function (req, res) {
    res.status(404).send('not found');
});
async function start() {
    try {
        app.listen(3000, function() {
            console.log('running 2232');
        });
    } catch (e) {
        console.log(e)
    }
}

start()

