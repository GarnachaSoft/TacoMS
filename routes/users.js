'use strict';

module.exports = (app) => {
    const getUser = (req, res) => {
        res
        .status (400)
        .json (req.user);
    };

    app.get ('/user', getUser);
    app.get ('/user/me', getUser);
};