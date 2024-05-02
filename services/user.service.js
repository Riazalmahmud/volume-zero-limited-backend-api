

const User = require("../models/User.model")

exports.createUserService = async(user)=>{
const userData = await User.create(user)
return userData
}

exports.getAllUserService = async()=>{
    const userData = await User.find({})
    return userData
}
exports.getUserService = async (email) => {
  const userData = await User.findOne({ email: email });
  console.log(userData, 'hellsfs')
  return userData;
};


exports.updateUserService = async(id,user)=>{
const userData = await User.updateOne({_id: id},{$set: user})
return userData
}



