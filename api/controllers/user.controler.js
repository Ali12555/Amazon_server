const USER_MODEL = require("../models/user.models");
 

 const createUser = async (req, res) => {
   const { Email, Password, Name } = req.body;
 
   try {
     const user = await USER_MODEL.create({
       Name,
       Email,
       Password,
     });
 
     res.status(200).json({
       success: true,
       massage: "user created",
       data: user,
     });
   } catch (e) {
     res.status(500).json({
       success: false,
       massage: "user not created",
       data: e,
     });
   }
 };

const Login = async(req, res) => {
  const { Email, Password} = req.body;
 try{
  const user = await USER_MODEL.findOne({
    Email: Email,
    Password: Password
  })
  res.status(200).json({
    success:!!user,
    massage:"login success",
    data:user
  })
 } catch(e){
  res.status(500).json({
    success:false,
    massage:"login failed",
    data:e
  })
 }
}
 
 module.exports = {
   createUser,
   Login
 };