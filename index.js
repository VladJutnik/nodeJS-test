const express = require('express')
const Routes = require('./routes/routes')

let app = express();
app.use(Routes)

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

