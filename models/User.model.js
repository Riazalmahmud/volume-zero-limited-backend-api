const mongoose = require('mongoose')
const validator = require('validator')
const ObjectId = mongoose.Schema.Types.ObjectId;
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,

    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      validate: [validator.isEmail],
      unique: true
    },

    password:{
      type: String,
      required: true,
      trim: true,
      validate: {
          validator: (value) => {
             validator.isStrongPassword(value, {
              minLength: 6,
              minLowercase: 3,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 1,
             })
          },
          message: 'Password must be at least 6 characters long in {{VALUE}}'
      }
  },
  confirmPassword: {
      type: String,
      required: false,
      validate: {
          validator: function(value) {
              return !this.isModified('password') || value === this.password;
          },
          message: 'Password does not match confirmPassword'
      }
  },
    passwordChangeAt: Date,
    passwordChangeResetAt: String,
    passWordResetExpired: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function(next){
   const password = this.password
   const hashPassword = bcrypt.hashSync(password)
   this.password = hashPassword,
   this.confirmPassword = undefined
   next()

})


userSchema.methods.comparePassword = function (password, hash) {
const isPasswordValid = bcrypt.compareSync(password, hash)
return isPasswordValid
}
const Users = mongoose.model('Users', userSchema);

module.exports = Users;
