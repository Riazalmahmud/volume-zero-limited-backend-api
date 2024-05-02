const { newsPostServices, newsGetServices } = require("../services/news.service");


  /** news post 
   * Post:  http://localhost:3000/api/v1/news-post
   * @param: {
    "postAuthName": "Riaz",
    "authImageURL": "www.google.com",
    "postImage": "www.google.com",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in odio augue. Cras a felis a quam sodales luctus. Maecenas finibus ligula ac risus auctor aliquam.",
    "title": "Lorem ipsum dolor sit amet first post"
  }
  */
  exports.newsPost = async (req, res, next) => {
    try {
      const news = await newsPostServices(req.body);
      res.status(200).json({
        status: true,
        message: "news created successfully",
        data: news,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        massage: "couldn't not fail create news",
        data: error.message,
      });
    }
};
  /** news post 
   * get:  http://localhost:3000/api/v1/news-post
 
  */
  exports.getNews = async (req, res, next) => {
    try {
      const news = await newsGetServices();
      res.status(200).json({
        status: true,
        message: "news get successfully",
        data: news,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        massage: "couldn't not fail get news",
        data: error.message,
      });
    }
};
  