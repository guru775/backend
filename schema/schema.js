const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cloneModel = new Schema({
    name: { type: String },
    location: { type: String },
    likes: { type: Number, default: Math.floor(Math.random()*100000) },
    description: { type: String },
    PostImage: { type: String },
    date: { type: String, default: new Date().toLocaleDateString() }


})

const model = mongoose.model("User", cloneModel)

module.exports=model