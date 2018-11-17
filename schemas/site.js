'use strict';

const mongoose = require ('mongoose');
const { Schema } = mongoose;

const { baseSchemaDefinition } = require ('./baseSchema');
const collectionName = 'site';

const schemaDefinition = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pages: [{
        type: Schema.Types.ObjectId,
        ref: 'page'
    }],

    properties: {
        type: [{
            key: String,
            value: String,
        }],
    },
    entities: [{
        type: Schema.Types.ObjectId,
        ref: 'entity_type'
    }],

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],

    status: {
        type: String,
        enum: ['active', 'suspended'],
        default: 'active',
        required: true,
    },
};

const schema = new Schema ({ ...baseSchemaDefinition, ...schemaDefinition }, { collectionName });
const model = mongoose.model (collectionName, schema);
module.exports = {
    model,
};