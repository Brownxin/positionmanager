"use strict";
const express = require('express');
const body_parser_1 = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const login_1 = require('./routes/login');
const protected_1 = require('./routes/protected');
const public_1 = require('./routes/public');
const feed_1 = require('./routes/feed');
const app = express();
exports.app = app;
app.disable('x-powered-by');
app.use(body_parser_1.json());
app.use(compression());
app.use(body_parser_1.urlencoded({ extended: true }));
// allow cors only for local dev
app.use(cors({
    origin: 'http://localhost:4200'
}));
// app.set('env', 'production');
// api routes
app.use('/api/secure', protected_1.protectedRouter);
app.use('/api/login', login_1.loginRouter);
app.use('/api/public', public_1.publicRouter);
app.use('/api/feed', feed_1.feedRouter);
if (app.get('env') === 'production') {
    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, '/../client')));
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
//# sourceMappingURL=/Users/Brown/Projects/positionmanager/dist/server/app.js.map