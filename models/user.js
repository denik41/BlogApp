const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: false,
        required: false
    },
    secondName: {
        type: String,
        unique: false,
        required: false
    },
    login: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        unique: false,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    aboutSelf: {
        type: String,
        unique: false,
        required: false
    },
    socialsLinks: {
        type: String,
        unique: false,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.encryptPassword = (password) => crypto.createHmac('sha1', this.salt).update(password).digest('hex');

userSchema.methods.checkPassword = password => password === this.password;

userSchema.virtual('password')
    .set((password) => {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(() => this._plainPassword);

export const User = mongoose.model('User', userSchema);
