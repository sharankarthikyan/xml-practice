const express = require('express');
var logger = require('morgan');
var path = require('path');
const app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
