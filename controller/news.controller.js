const { newsPostServices, newsGetServices, newsUpdateServices, newsDeleteServices } = require("../services/news.service");


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
  /** news update 
   * put:  http://localhost:3000/api/v1/news-post/6632e73b9ee519be269277c5
   * @param: {
   * _id: "6632e73b9ee519be269277c5",
    "postAuthName": "Riaz",
    "authImageURL": "www.google.com",
    "postImage": "www.google.com",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in odio augue. Cras a felis a quam sodales luctus. Maecenas finibus ligula ac risus auctor aliquam.",
    "title": "Lorem ipsum dolor sit amet first post"
  }
  */
exports.newsUpdate = async (req, res, next) => {
    const id  = req.params.id
    try {
      const news = await newsUpdateServices( id , req.body);
      res.status(200).json({
        status: true,
        message: "news update successfully",
        data: news,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        massage: "couldn't not fail update news",
        data: error.message,
      });
    }
};
  /** news delete 
   * delete:  http://localhost:3000/api/v1/news-post/6632e73b9ee519be269277c5

  */
exports.newsDelete = async (req, res, next) => {
    const id  = req.params.id
    try {
      const news = await newsDeleteServices( id);
      res.status(200).json({
        status: true,
        message: "news delete successfully",
        data: news,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        massage: "couldn't not fail delete news",
        data: error.message,
      });
    }
};
  /** news get  all news
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
  