const {
  createUserService,
  getUserService,
  updateUserService,
  getAllUserService,
} = require("../services/user.service");

const { generateToken } = require("../utils/utils");

const nodemailer = require('nodemailer');



/** Register a new user
 * Post:  http://localhost:3000/api/v1/user
 * @param: {
  "userName": "Riaz",
  "email": "users041@gmail.com",
  "password": "123456",
  "confirmPassword": "123456",
}
*/
exports.createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: true,
      message: "user created successfully",
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      massage: "couldn't not fail create user",
      data: error.message,
    });
  }
};


/** get all  users
 * get:  http://localhost:3000/api/v1/user
*/
exports.getUser = async (req, res, next) => {
  try {
    const user = await getAllUserService();
    res.status(200).json({
      status: "success",
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      massage: "couldn't not fail create user",
      data: error.message,
    });
  }
};


// user update
exports.updateUser = async (req, res, next) => {
  req.body.imageUrl = __dirname + "/public/images/users/" + req.file?.filename;
  const _id = req.params.id;
  try {
    const user = await updateUserService(_id, req.body);
    res.status(200).json({
      status: "success",
      message: "user updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      massage: "couldn't fail update user",
      data: error.message,
    });
  }
};


/* * login user 
 * Post:  http://localhost:3000/api/v1/user/login
 * @param: {
    "userName": "riazalmahmud002@gmail.com",
    "password": "Ri@zalmahmud12346"
}
*/
exports.findUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: false, massage: "email and password are required" });
    }
    const user = await getUserService(email);
    console.log(user);
    if (!user) {
      return res.status(401).json({
        status: false,
        massage: "could not be found email and password",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: false,
        massage: "password is invalid",
      });
    }
    const token = generateToken(user);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: true,
      message: "user get successfully",
      data: others,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      massage: "couldn't not fail get user",
      data: error.message,
    });
  }
};



/* * get user information
get : http://localhost:3000/api/v1/user/getMe
@param :{
  Authorization: Bearer <token>
}
 */
exports.getMe = async (req, res) => {
  console.log(req);
  try {
    const user = await getUserService(req?.user?.email);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "success",
      message: "user get successfully",
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      massage: "user not verified",
      data: error.message,
    });
  }
};

