'use strict';

const mongoose = require ('mongoose');
const { Schema } = mongoose;

const { baseSchemaDefinition } = require ('./baseSchema');
const collectionName = 'entity_type';

const schemaDefinition = {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    metas: {
        type: [{
            key: String,
            value: String,
        }],
    },
    properties: {
        type: [{
            key: String,
            value: String,
        }],
    },
};

const schema = new Schema ({ ...baseSchemaDefinition, ...schemaDefinition }, { collectionName });
const model = mongoose.model (collectionName, schema);
module.exports = {
    model,
};