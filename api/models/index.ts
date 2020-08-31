import mongoose, { Schema } from 'mongoose'
import moment from 'moment'
import isEmail from 'validator/lib/isEmail'

const userSchema: Schema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [ isEmail, 'invalid email' ],
  },
  password: { type: String, required: true },
  login: { type: String, minlength: 3, required: true },
  firstName: { type: String, minlength: 2 },
  lastName: { type: String, minlength: 2 },
  dateRegistration: { type: Date, default: moment },
})

export const userModel = mongoose.model('User', userSchema)
