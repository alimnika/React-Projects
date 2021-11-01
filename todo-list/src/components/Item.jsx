import { useState } from "react";
import React from "react";
const Item =({todoItem, completeTodo, list})=>{
    const [edit,setEdit] =useState(false);
    const [todo, setTodo] = useState(todoItem.task)

    const handleEdit=()=>{
        setEdit(!edit)
    }
    const handleEditChange =(e)=>{
        setTodo(e.target.value)
    }
    const handleEditSubmit =(id)=>{
        const editedList= list.map((el)=>{
            if(el.id=== id){
                console.log(id)
                el.task=todo
                // console.log(editedList)
            }
            return el;
        })
    }
    return(
        <div>
            { !edit ?(
                <>
                <label>{todoItem.task}</label>
                <input 
                type=""checkbox
                checked ={todoItem.isCompleted}
                value={todoItem.task}
                onChange={()=>completeTodo(todoItem.id)}
                disable ={todoItem.isCompleted ? true:false}/>
                {/* <span></span> */}
                <button onClick={handleEdit} disable={todoItem.isCompleted}>Edit</button>
                </>
               ):(
                   <>
                   <input 
                   type="text"
                   value={todo}
                   name="todo"
                   onChange={handleEditChange}
                   />
                   <button onClick={handleEditSubmit(todoItem.id)}>Cancel</button>
                   <button onClick={handleEdit}>Sumbit</button>
                   </>
               )
               }
        </div>
    )
}
export default  Item