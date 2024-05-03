

const NewsPost = require("../models/news.model")

exports.newsPostServices = async(news)=>{
const newsPost = await NewsPost.create(news)
return newsPost
}
exports.newsGetServices = async()=>{
const newsPost = await NewsPost.find({})
return newsPost
}
exports.newsUpdateServices = async(id, data)=>{
const newsUpdate = await NewsPost.updateOne({_id: id}, data)
return newsUpdate
}
exports.newsDeleteServices = async(id)=>{
const newsDelete = await NewsPost.deleteOne({_id: id})
return newsDelete
}

