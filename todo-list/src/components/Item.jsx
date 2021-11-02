import { useState } from "react";
import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faEdit,faPlus} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit,faPlus)


const Item =({todoItem, index,  list,})=>{
    const [edit,setEdit] =useState(false);
    const [todo, setTodo] = useState(todoItem.task)
    const [del, setDel] = useState([])

    // console.log(index)
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
                el.task=todo
            }
            return el;
        })
    }
    const deleteTask=(index)=>{
        console.log(index)
        const del = list.filter((ind)=>ind.id !== index)
        // del.splice(index,1)
       setDel(del)
        //   console.log('ind',index)
          console.log(del, "from filter")
    
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
                <i className="trash" key={todoItem.id} onClick={()=>{deleteTask(index.id)}}><FontAwesomeIcon   icon="trash"/></i>
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