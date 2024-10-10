const bcrypt = require('bcryptjs');
const sendError = require('../utils/sendError');
const jwt = require('jsonwebtoken');
const sendResponse = require('../utils/sendResponse');

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync('1234!@4', salt);
const user = {
    id: '12345',
    username: 'anand.yadav',
    email: 'anand.yadav@gmail.com',
    password: hashedPassword
};

const auth = async (req, res, next) => {
   const { username, password } = req.body;
   if (username !== user.username) {
     sendError(res, 401, '401', 'Unauthorized');
   }
   const passwordMatched = await bcrypt.compare(password, user.password);
   if (!passwordMatched) {
     sendError(res, 401, '401', 'Unauthorized');
   }
   const token = await jwt.sign({ id: user.id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
   });
   sendResponse(res, 200, token, 'User authenticated');
};

module.exports = {
  auth
};