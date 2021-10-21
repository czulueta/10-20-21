const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        toLowerCase: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String.Types.ToObject()
    },
    day: {
        type: String
    }
})

module.exports = mongoose.model("Todo", todoSchema)