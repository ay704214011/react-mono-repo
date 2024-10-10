const jwt = require('jsonwebtoken');
const sendError = require('../utils/sendError');

const protect = (req, res, next) => {
    console.log('req ', req.headers);
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      const { authorization }  = req.headers;
      const token = authorization.split(' ')[1];
      console.log('token ', token);
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        console.log('decoded ', decoded);
        if (err) {
          console.log('jwt verify error ', err);
          sendError(res, 401, '401', 'Unauthorized');
        } else {
          next();
        }    
      });
    } else {
      sendError(res, 401, '401', 'Unauthorized');
    }
    
};

module.exports = protect;