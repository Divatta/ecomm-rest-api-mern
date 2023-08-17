// get the inputs using model

    // isActive ->(false = user is blocked by admin, contact admin to unblock the user) (true = user is active) if any suspicious activities are happen means admin can block the user
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required:[true, "name field must be filled"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "email field must be filled"],
            trim: true,
            unique: [true, "email already exists."]
        },
        password: {
            type: String,
            required: [true, "password field must be filled"],
            trim: true
        },
        mobile: {
            type: String,
            required: [true, "mobile field must be filled"],
            trim: true,
            unique: [true, "mobile already exists."]
        },
        address: {
            type: Array,
            default: []
        },
        favProducts: {
            type: Array,
            default: []
        },
        cart: {
            type: Array,
            default: []
        },
        role: {
            type: String,
            default: "user"
        },
        isActive: {
            type: Boolean,
            default: true
        }
}, {
        collection: 'users',
        timestamps: true
})
    
module.exports = mongoose.model("User", userSchema)