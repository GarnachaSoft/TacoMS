'use strict';

const ctrl = require ('../controllers/UserController');

module.exports = (app, passport) => {
    const bearer = passport.authenticate ('bearer', { session: false });

    app.get ('/user', bearer, (req, res) => {
        res
            .status (200)
            .json ({
                data: req.user
            })
        ;
    });

    app.get('/users', bearer, ctrl.find);
    app.post ('/users', bearer, ctrl.store);

    app.get('/user/:id', bearer, ctrl.show);
    app.put ('/user/:id', bearer, ctrl.update);
    app.delete ('/user/:id', bearer, ctrl.delete);
};