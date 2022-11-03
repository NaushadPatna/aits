const mongooes = require("mongoose");
const validator = require("validator");

const userSchema = mongooes.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id");
            }
        }
    },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
        minLength: 3
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//We need collection
const user = mongooes.model("User", userSchema);
module.exports = user;
