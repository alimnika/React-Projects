import React, {useState} from "react";
import Item from './components/Item'
import {library} from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faEdit,faPlus} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit,faPlus)

const Todo=()=>{
    const [list, setList]=useState([]);
    const [todo, setTodo] = useState('')

    let image=["https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(todo ===""){
            return
        }
        let newList={
            id:list.length,
            task:todo,
            iscompleted: false
            
        }
        setList([...list, newList])
    }
    
    
    return(
        <div className ="todo-app">
            <h1>ToDo List</h1>
            <input type="text"
            className='todo-input' 
             placeholder="Enter your task"
             value={todo}
             onChange={handleChange}/>
            <button className="todo-button" onClick={handleClick}>Add</button>
            <div>
                {list.length > 0 ?(
                    list.map((todoItem,index)=>{
                        return (
                            <Item
                            index={index}
                            todoItem={todoItem}
                            list={list}
                            key={todoItem.id}
                            />
                        ) 
                    })
                ):(
                    <>
                    <img src={image} alt=""/>
                    </>
                )
                }
            </div>
            
        </div>
    )
}
export default Todo