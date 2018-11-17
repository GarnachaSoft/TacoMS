'use strict';

const { errors } = require ('../utils');

module.exports = (app, passport) => {
    passport.serializeUser ((user, done) => {
        done (null, user);
    });

    passport.deserializeUser ((user, done) => {
        done (null, user);
    });

    require ('../strategies/bearer') (app, passport);
    require ('../strategies/google') (app, passport);

    app.all ('/auth/success', (req, res) => {
        res
            .status (200)
            .json ({
                access_token: req.user.credentials.accessToken,
                data: req.user,
            })
        ;
    });

    app.all ('/auth/fail', (req, res) => {
        res
            .status (errors.generic.UNEXPECTED.status)
            .json (errors.generic.UNEXPECTED)
        ;
    });
};