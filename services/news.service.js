

const NewsPost = require("../models/news.model")

exports.newsPostServices = async(news)=>{
const newsPost = await NewsPost.create(news)
return newsPost
}
exports.newsGetServices = async()=>{
const newsPost = await NewsPost.find({})
return newsPost
}

