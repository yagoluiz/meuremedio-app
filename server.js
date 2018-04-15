const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(express.static('www'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express => ' + app.get('port'));
}); 