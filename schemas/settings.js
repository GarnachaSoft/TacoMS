'use strict';

const { createModel, createUniqueIndex } = require ('./baseSchema');
const collectionName = 'settings';

const schemaDefinition = {
    key: { type: String, required: true },
    value: { type: String },
};

const schemaIndexed = createUniqueIndex ({
    collectionName,
    schemaDefinition,
    indexName: 'settings_key_unique',
    indexDefinition: {
        'key': 1,
    },
});

const model = createModel ({
    collectionName,
    schemaDefinition: schemaIndexed,
});

module.exports = {
    model,
};