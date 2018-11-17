'use strict';

const mongoose = require ('mongoose');
const { Schema } = mongoose;

const { baseSchemaDefinition } = require ('./baseSchema');
const collectionName = 'entity';

const schemaDefinition = {
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    path: {
        type: String,
    },
    content: {
        type: String,
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
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
};

const schema = new Schema ({ ...baseSchemaDefinition, ...schemaDefinition }, { collectionName });
const model = mongoose.model (collectionName, schema);
module.exports = {
    model,
};