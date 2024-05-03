const mongoose = require('mongoose')
const validator = require('validator')
const NewsSchema = mongoose.Schema(
  {
    postAuthName: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,

    },
    authImageURL: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
      validate: [validator.isURL],
  
    },
    postImage: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
    },
    title: {
      type: String,
      trim: true,
      required: false,
      lowercase: true,
    },

  


})
const News = mongoose.model('News', NewsSchema);

module.exports = News;
