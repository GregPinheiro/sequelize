const { Router } = require('express');
const router = Router();
const userController = require('../controllers/users.controllers');

router.get('/login', userController.loginPage);
router.get('/senha/:password?', userController.senha);
router.get('/usuarios', userController.index);
router.post('/usuario', userController.oneUser);

module.exports = router;

