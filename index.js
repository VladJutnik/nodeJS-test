const express = require('express'),
 Routes = require('./routes/routes'),
 exphbs = require('express-handlebars'),
 path = require("path");

let app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(Routes)
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

