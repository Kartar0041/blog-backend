import { Router } from "express";
import { Users } from "../model/model.js";
import {
  validateUser,
  validateUserSignIn
} from "../services/validateServices.js";
import BcryptService, { JwtService } from "../services/bcryptServices.js";

const userRouter = Router();
const bcryptServices = new BcryptService();
const jwtService = new JwtService();

userRouter.get('/', (req, res) => {
  console.log("called api")
  res.send("HELLO WORLD user!")
})

// Sign Up user
userRouter.post('/signup', validateUser, async (req, res) => {
  try {
    const { password } = req.body;
    const { email } = req.body;
    const isEmailExist = await Users.findOne({ email: email });
    if (isEmailExist) {
      res.status(409).json({ status: false, message: 'Email already exist' });
      return false
    }
    const hashPassword = bcryptServices.createHashPassword(password);
    const result = await Users.create({ ...req.body, password: hashPassword })
    if (result) {
      res.status(201).send({ status: true, message: 'User created successfully ' })
      return false
    }
    res.send(400).send({ status: false, message: 'Failed to create user' })
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send({ status: false, message: `User name already exists` });
      return false
    }
    res.status(500).send({ status: false, message: 'Something Went Wrong!' });
  }
})

// Sign In User

userRouter.post('/signin', validateUserSignIn, async (req,res) => {
  try {
    const { email, password: comaparePass } = req.body;
    const isUser = await Users.findOne({ email: email });
    if(!isUser){
      res.status(404).json({ status: false, message: "User doesn't exist"});
      return false;
    }
    const { password } = isUser;
    const hashPassword = await bcryptServices.comparePassword(comaparePass, password);
    if(hashPassword){
      const token = jwtService.createToken(isUser);
      res.status(200).json({ status: true, message: 'Login successfully', token: token }).end();
    }
  } catch (error) {
    res.status(500).json({ status: false, message: 'Internal Server Errror'})
  }
})

export {
  userRouter
}