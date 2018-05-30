import jwt from 'jsonwebtoken';

export default  (req, res, next)=> {
  console.log("Validate token");
  next();
}