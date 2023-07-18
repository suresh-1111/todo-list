import React, { useState } from "react";
import "./App.css";

const App =()=>{
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [editId,setEditId]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId){
      const editTodo = todos.find((i)=> i.id ===editId);
      const updatedTodos=todos.map((t)=>
      t.id === editTodo.id?
       (t={id:t.id,todo})
       :{id:t.id,todo:t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo !==''){
      setTodos([{id: `${todo}-${Date.now()}`,todo},...todos])         
      setTodo("");
    }
  };
  const handleDelete=(id)=> {
    const delTodo=todos.filter((to)=> to.id !== id);
    setTodos([...delTodo]); 
    };

  const handleEdit=(id)=>{
    const editTodo=todos.find((i)=> i.id===id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  
    
 
  
  return(
    <div className="App">
      <div className="container">
        <h1>
          
          Todo List App
        </h1>
        <form  className="todoform" onSubmit={handleSubmit}>
            <input className="input" value={todo} type="text" onChange={(e)=>setTodo(e.target.value )}/>
           
            <button type="submit" className="button"> {editId? "Edit":"Go"}</button>
          </form>
          <ul className="allTodos">
            {
              todos.map((t)=> (  
            <li  key={t.id} className="singleTodo">
              <span className="todoText">{t.todo} </span>
              <button onClick={()=> handleEdit(t.id)}className="button"> Edit</button>
              <button  onClick={()=> handleDelete(t.id) }className="button">Delete</button>
              </li>
            
              ))}
              </ul>
              </div>
             
      </div>
   
  );
}
export default App;







