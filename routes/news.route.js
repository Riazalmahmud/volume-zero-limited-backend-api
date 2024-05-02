const { newsPost, getNews } = require('../controller/news.controller');

const newsRouter = require('express').Router();

newsRouter.post("/", newsPost )
newsRouter.get("/", getNews )

module.exports = newsRouter