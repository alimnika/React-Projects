import { useState } from "react";
import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faEdit,faPlus} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit,faPlus)


const Item =({todoItem, index, setList, list})=>{
    const [edit,setEdit] =useState(false);
    const [todo, setTodo] = useState(todoItem.task)
    const [del, setDel] = useState([])

    const handleEdit=()=>{
        setEdit(!edit)
        // console.log(setEdit(!edit))
    }
    const handleEditChange =(e)=>{
            setTodo(e.target.value)
    }
    const handleEditSubmit =(id)=>{
        const editedList= list.map((el)=>{
            if(el.id === id){
                // console.log(id)
                el.task=todo
                // console.log(editedList)
            }
            return el;
        })
    }
    const deleteTasks=(e)=>{
        console.log(e)
        del.splice(e,1)
        setDel(del)
    }
    return(
        <div className="todo-container" >
            { !edit ?(
                <>
                <input 
                type="text"
                value={todoItem.task}
                onClick={handleEditChange}
                disabled ={todoItem.isCompleted ? true:false}/>
                <i className="edit" onClick={handleEdit} disabled={todoItem.isCompleted}><FontAwesomeIcon  icon="edit"/> </i>
                <i className="trash" onClick={(e)=>{deleteTasks(todoItem.task)}}><FontAwesomeIcon   icon="trash"/></i>
                </>
               ):(
                   <>
                   <input 
                   type="text"
                   value={todo}
                   name="todo"
                   onChange={handleEditChange}
                   />
                   <span onClick={handleEditSubmit(todoItem.id)}></span>
                   <i className="plus" onClick={handleEdit}><FontAwesomeIcon  icon="plus"/></i>
                   </>
               )
               }
        </div>
    )
}
export default  Item