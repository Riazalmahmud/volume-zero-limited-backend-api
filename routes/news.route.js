const { newsPost, getNews, newsUpdate, newsDelete } = require('../controller/news.controller');

const newsRouter = require('express').Router();

newsRouter.post("/", newsPost )
newsRouter.get("/", getNews )
newsRouter.put("/:id", newsUpdate )
newsRouter.delete("/:id", newsDelete )

module.exports = newsRouter