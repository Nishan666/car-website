// from -->app.use('/auth',require('./routes/auth'));
const express = require("express");
const authController = require('../controllers/auth');
const router = express.Router();

// from register page -->form submit
router.post('/register', authController.register );

router.post('/buy', authController.buy);





module.exports = router;