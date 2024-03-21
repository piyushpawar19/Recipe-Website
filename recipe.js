const mongoose= require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type : 'String',
        required: 'this field is required',
    },
    description:{
        type : 'String',
        required: 'this field is required',
    },
    email:{
        type : 'String',
        required: 'this field is required',
    },
    ingredients:{
        type : Array,
        required: 'this field is required',
    },
    category:{
        type : 'String',
        enum: ['Thai','American','Chinese','Mexican','Indian'],
        required: 'this field is required',
    },
    image:{
        type : 'String',
        required: 'this field is required',
    }
});

recipeSchema.index({ name: 'text', description: 'text'});

module.exports = mongoose.model('Recipe', recipeSchema);