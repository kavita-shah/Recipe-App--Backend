const mongoose = require("mongoose")
const schema = mongoose.schema

const userSchema = new schema({
    userEmail:{ type:string},
    password:{type:string}
})

const userDetails = mongoose.model("userDetails", userSchema)
module.export= userDetails