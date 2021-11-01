const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    lastName:{
        type : String,  
        trim: true
    },
    course: {
        type : String,
        trim: true,
    }
},
{
    versionKey: false,
    timestamps : true
})

module.exports = mongoose.model('student', StudentSchema)