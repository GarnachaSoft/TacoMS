'use strict';

const mongoose = require ('mongoose');
const { Schema } = mongoose;

const { baseSchemaDefinition } = require ('./baseSchema');
const collectionName = 'page';

const schemaDefinition = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content:  {
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
    entities: [{
        type: Schema.Types.ObjectId,
        ref: 'entity'
    }],
};

const schema = new Schema ({ ...baseSchemaDefinition, ...schemaDefinition }, { collectionName });
const model = mongoose.model (collectionName, schema);
module.exports = {
    model,
};