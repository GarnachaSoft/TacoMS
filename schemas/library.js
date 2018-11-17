'use strict';

const mongoose = require ('mongoose');
const { Schema } = mongoose;

const { baseSchemaDefinition } = require ('./baseSchema');
const collectionName = 'library';

const schemaDefinition = {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    items: [{
        index: {
            type: Number,
            default: 0,
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'entity'
        },
    }],
};

const schema = new Schema ({ ...baseSchemaDefinition, ...schemaDefinition }, { collectionName });
const model = mongoose.model (collectionName, schema);
module.exports = {
    model,
};