const USER_MODEL = require("../models/user.models");
 
 const createUser = (req, res) => {
   const { Email, Password, Name } = req.body;
 
   USER_MODEL.create({
     Name: Name,
     Password: Password,
     Email: Email,
   })
     .then((createRes) => {
       res.status(200).json(createRes);
     })
     .catch((e) => res.status(500).json({ error: true, errorMessage: e }));
 
 };

// const Login = (req, res) => {
//    const { Email, Password} = req.body;
 
//    USER_MODEL.findOne({
//      Email: Email,
//      Password: Password
//    })
//      .then((user) => {
//       if(user){
//         res.status(200).json(user)
//       } else {
//         res.status(404).json({ error: true, errorMessage: "User not found" });
//       }
//      })
//      .catch((e) => res.status(500).json({ error: true, errorMessage: e }));

//  };
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