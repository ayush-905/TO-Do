import React ,{useState,useEffect} from "react";
import axios from 'axios';
import TaskList from "./component/TaskList";
import AddToDo from "./component/AddToDo";
import Header from "./component/Header"
import './App.css';

function App() {
  const [taskList,setTaskList]=useState([])
  const[flag,setFlag]=useState(true)

 const url='http://localhost:3001/todo'
 
  useEffect(()=>{
    const fetchTask=async ()=>{
      try{
        const res=await axios.get(`${url}/get`)
        setTaskList(res.data)
    }
    catch(err){
      console.log(err);
    }}
    fetchTask()
  },[flag])

  const submitTask=(title)=>{
    axios.post(`${url}/insert`,{
      title:title
    })
    setFlag(
        flag=>!flag
    )
  }

  const deleteTask=(id)=>{
    //console.log(id);
    axios.delete(`${url}/delete/${id}`)
    setFlag(
      flag=>!flag
  )
  }

  const updateItem=(id,newTitle)=>{
    axios.put(`${url}/update/${id}`,{
      id:id,
      title:newTitle
    })
    setFlag(
      flag=>!flag
   )
  }

  return (
    <div className="App">
      <Header/>
      <AddToDo
        onAddTodo={submitTask}
      />
    <TaskList 
       todos ={taskList} 
       onChangeTodo={updateItem}
       onDeleteTodo = {deleteTask}>
     </TaskList>
     </div>
  );
}

export default App;
