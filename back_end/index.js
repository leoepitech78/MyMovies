require ("dotenv").config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3306;
bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var routes = require('../back_end/routes/users.js');
routes(app);


app.listen(port, () => {
    console.log("Conecté au port :" + process.env.DB_PORT)
});

console.log('Listening on PORT: ' + process.env.DB_PORT);