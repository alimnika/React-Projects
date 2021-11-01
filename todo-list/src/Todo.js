import React, {useState} from "react";
import Item from './components/Item'
const Todo=()=>{
    const [list, setList]=useState([]);
    const [todo, setTodo] = useState('')

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
        const completedTodo=(index)=>{
            const addList =list.map(elem=>{
                if(elem.id===index){
                    elem.iscompleted=!elem.iscompleted
                    console.log(addList)   
                }
                return(
                    elem
                )
            })
        }
    
    return(
        <div className ="App">
            <h1>ToDo List</h1>
            <input type="text" 
             placeholder="Enter your task"
             value={todo}
             onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
            <div>
                {list.length > 0 ?(
                    list.map(todoItem=>{
                        return (
                            <Item
                            todoItem={todoItem}
                            completeTodo={completedTodo}
                            list={list}
                            key={todoItem.id}
                            />
                        ) 
                    })
                ):(
                    <h1>You don't have atask</h1>
                )
                }
            </div>
            
        </div>
    )
}
export default Todo