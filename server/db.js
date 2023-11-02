const mysql=require('mysql2')

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'crud'
});
db.connect((err) => {
    if (err) {
      console.log(err); 
      throw err;
      
    }
    console.log("MySql Connected");
  });

module.exports = db;