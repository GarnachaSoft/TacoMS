'use strict';

const generic = {
    UNEXPECTED: {
        status: 500,
        code: 'UNEXPECTED',
        message: 'Unexpeted error',
    }
};

const mongo = {
    UNEXPECTED: {
        status: 500,
        code: 'MONGO_UNEXPECTED',
        message: 'Unexpeted error with MongoDB',
    }
};

const users = {
    REGISTERED: {
        status: 400,
        code: 'USER_REGISTERED',
        message: 'The user is already exists',
    },
    UNREGISTERED: {
        status: 401,
        code: 'USER_UNREGISTERED',
        message: 'The user is not exists',
    }
};

module.exports = {
    generic,
    mongo,
    users,
};