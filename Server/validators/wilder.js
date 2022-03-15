import { body, validationResult } from 'express-validator';


export const create = [
  body("name").isLength({ min: 5 }).withMessage('Name must have more than 5 characters'),
  (req, res, next) => {
    const errorsValidation = validationResult(req);
    if(!errorsValidation.isEmpty()) {

      let errors = {};
      errorsValidation.errors.map(error => {
        errors = {...errors, [error.param]: error.msg};
      })

      res.json({
        success: false,
        result: errors
      });

    } else {
      next();
    } 
  }
];


