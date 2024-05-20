import bcrypt from 'bcrypt';


class BcryptService {

  constructor(){
    this.saltRounds = 10
  }

  createHashPassword(password) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}

export default BcryptService;

