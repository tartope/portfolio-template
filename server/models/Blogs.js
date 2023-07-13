const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
});

// Sets the createdAt parameter equal to the current time
BlogSchema.pre('save', (next)=>{
    now = new Date();
    if(!this.createdAt){
        this.createdAt = now;
    }
    next();
});


const BlogModel = mongoose.model("blogs", BlogSchema)
module.exports = BlogModel;