'use strict';

const GoogleStrategy = require ('passport-google-oauth').OAuth2Strategy;
const { credentials } = require ('../config/settings');
const { UserModel } = require ('../models');

module.exports = (app, passport) => {
    passport.use (
        new GoogleStrategy (
            {
                clientID: credentials.google.CLIENT_ID,
                clientSecret: credentials.google.CLIENT_SECRET,
                callbackURL: `http://${app.locals.hostname}/auth/google/callback`
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const data = {
                        name: `${profile.name.givenName} ${profile.name.familyName}`,
                        email: profile.emails [0].value,
                        photoUrl: profile.photos [0].value.replace ('?sz=50', ''),
                        credentials: {
                            accessToken,
                        },
                    };
                    const user = await UserModel.upsert (data);
                    return done (null, user);
                } catch (e) {
                    app.outputs.json ('ERROR', e);
                    return done (e);
                }
            }
        )
    );

    app.get ('/auth/google', passport.authenticate ('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
    app.get ('/auth/google/callback', passport.authenticate ('google', { failureRedirect: '/auth/fail' }), (req, res) => {
        res.redirect ('/auth/success');
    });
};