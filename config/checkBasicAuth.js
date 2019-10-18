var User = require('../app/models/UserModel.js');
const dotenv = require('dotenv');
dotenv.config();
var response = require('./rs');

class checkBasicAuth {

    index(allReq,res) {

        let checkBasic = basicAuth(allReq,res)
        return checkBasic;

        async function basicAuth(req,res) {
            // make authenticate path public
            // if (req.path === '/users/authenticate') {
            //     return next();
            // }

            // check for basic auth header
            if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
                return res.status(401).json({ message: 'Missing Authorization Header' });
            }

            // verify auth credentials
            const base64Credentials =  req.headers.authorization.split(' ')[1];
            const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
            const [username, password] = credentials.split(':');
            if(username == process.env.USER_BASIC && password == process.env.PASS_BASIC){
                // return response.ok('berhasil', res);
                // checkUserLogin(req,res)
                return 'success'
            }else{
                return 'username atau password salah'
            } 
        }
    }
}
module.exports = checkBasicAuth