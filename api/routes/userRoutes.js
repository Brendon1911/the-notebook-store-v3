const express = require('express');
const csrf = require('csurf');
const router = express.Router();

const csrfProtection = csrf();
router.use(csrfProtection);

router.get('/', (req, res, next) => {
  res.render('user/signUp', { 
    title: 'Sign Up',
    csrfToken: req.csrfToken
  });
});

module.exports = router;