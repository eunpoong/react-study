import mongoose, { Schema } from 'mongoose';
//import bcrypt from 'bcrypt'; // 윈도우에서 bcrypt 설치 안되서 패스

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function(password) {
  //const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = password;
};

UserSchema.methods.checkPassword = async function(password) {
  //const result = await bcrypt.compare(password, this.hashedPassword);
  if (password === this.hashedPassword) {
    return true;
  } else {
    return false;
  }
  //return result; // true / false
};

UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
