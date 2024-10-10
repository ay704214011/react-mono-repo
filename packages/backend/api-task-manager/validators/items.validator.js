const { body } = require('express-validator');

const postValidator = () => {
   return [
     body('id').notEmpty(),
     body('title').notEmpty().escape().trim(),
     body('category').notEmpty().escape()
   ]
};

module.exports = postValidator;
