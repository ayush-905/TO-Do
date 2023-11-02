const express= require('express');
const cors =require('cors');
const router=require('./routes/ToDoRoute')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/todo',router)


app.listen((3001), () => {
  console.log("Connected to server");
});