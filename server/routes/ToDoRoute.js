const express= require('express');
const router=express.Router()
const db=require('../db')

router.get("/get",(req, res) => {
    const q = "SELECT * FROM todos";
    db.query(q, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });


router.post("/insert",(req, res) => {
    const q = "INSERT INTO todos(`title`) VALUES (?)";
    const values = [req.body.title];
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json("Successful");
    });
  });  


router.delete("/delete/:id",(req, res) => {
    var Id = req.params.id;
    var q = 'DELETE FROM todos WHERE id = ?';
    db.query(q, [Id], (err, data) => {
      if (err){
        console.log(err);
      } return res.send("HEY");
      
    });
  });

router.put("/update/:id",(req, res) => {
    const Id = req.params.id;
    const q = "UPDATE todos SET `title`= ? WHERE id = ?";
  
    const values = [req.body.title];
  
    db.query(q, [values,Id], (err, data) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      return res.json(data);
    });
  } );

module.exports=router