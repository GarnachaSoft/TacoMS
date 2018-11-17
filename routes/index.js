'use strict';

const passport = require ('passport');

module.exports = (app) => {
    require ('./login') (app, passport);
    require ('./users') (app, passport);
};