import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Password Bcrypt service
class BcryptService {

  constructor(){
    this.saltRounds = 10
  }

  createHashPassword(password) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  async comparePassword(inputPassword, hashPassword){
    return await bcrypt.compare(inputPassword, hashPassword);
  }
}

// Jwt Service
export class JwtService {

  constructor(data){
    this.data = data
  }

  createToken(data) {
   return jwt.sign({
      data: data,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  async comparePassword(inputPassword, hashPassword){
    return await bcrypt.compare(inputPassword, hashPassword);
  }
}

export default BcryptService;

