var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const authCont = require('../app/controllers/AuthController');
// const isoCont = require('../app/controllers/isoController');
const objAuth  = new authCont();

router.post('/login', objAuth.login);
router.get('/get_user', objAuth.getUsers);

module.exports = router;
