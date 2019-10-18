'user strict';
var sql = require('../../config/db.js');

//User object constructor
var User = function(user){
    // this.user = user.user;
    // this.status = user.status;
    // this.created_at = new Date();
};

User.getUserById = function (userId, result) {
        sql.query("Select * from users where id = ? ", userId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    var string=JSON.stringify(res);
                    console.log(string)
                    // result(null, res);
                }
            });   
};
User.getAllUser = function (result) {
    // sql.query("Select * from users where DATE(tanggall) = '2019-10-15'", function (err, res) {
    var objData = {
        id: "",
        name: "",
        email: "",
        foto: "",
    };
    var allData = [];
    sql.query("Select * from users", function (err, res, fields) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            // res.statusCode = 500;
            // return res.json({ errors: err });
        }else{
            // ret = JSON.stringify(res);
            for(let i = 0;i<res.length;i++){
                objData.id = res[i].id
                objData.name = res[i].name
                objData.email = res[i].email
                objData.foto = res[i].foto
                allData.push(objData) 
            }
            // console.log('data : ', res);  
            result(null, allData);
        }
    });   
};

User.checkUser = function ({ email, password },result) {
    // const user = users.find(u => u.username === username && u.password === password);
    // if (user) {
    //     const { password, ...userWithoutPassword } = user;
    //     return userWithoutPassword;
    // }
    sql.query("Select * from users where email='"+email+"'", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('tasks : ', res);  
            result(null, res);
        }
    }); 
}

// User.checkUser = async function authenticate({ email, password },result) {
//     // const user = users.find(u => u.username === username && u.password === password);
//     // if (user) {
//     //     const { password, ...userWithoutPassword } = user;
//     //     return userWithoutPassword;
//     // }
//     sql.query("Select * from users where email='"+email+"'", function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             console.log('tasks : ', res);  
//             result(null, res);
//         }
//     }); 
// }
module.exports= User;