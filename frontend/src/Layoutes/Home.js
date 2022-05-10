import TodoField from '../components/todofield'
import Todo from '../components/Todo';
import { useState } from 'react';

const Home=()=>{
    const [todo,setTodo]=useState([
        {
            id:1,
            title:'simple title',
            content:'lorem-19Ut cillum quis in do non. Ullamco consequat aute adipisicing mollit Lorem irure. Labore eu amet fugiat officia ex enim.'
        },
        {
            id:2,
            title:'simple title',
            content:'lorem-19Ut cillum quis in do non. Ullamco consequat aute adipisicing mollit Lorem irure. Labore eu amet fugiat officia ex enim.'
            
        }
    ])

    const deleteTask=(id)=>{
        setTodo(todo.filter((item)=>item.id !== id))
        
    }


    const saveData=(todoObject)=>{
        console.log("this is object parrent",todoObject)
        const newTodo={
            ...todoObject,
            id:Math.random()*100
        }
        console.log("this is new item",newTodo)
        setTodo((todo)=>{
            todo.push(newTodo)
        });

    }
    return (
        <div style={{backgroundColor:'red'}}>

        <div className="row container  m-auto" style={{backgroundColor:'#7b6868',marginTop:'40px'}}>
       
        <div className=" text-center">

            <div style={{display:'inline-block',width:'50vh',height:'50vh',marginTop:'20px'}}>
                <TodoField onsaveTodofield={saveData} />

            </div>
            <div style={{display:'inline-block', width:'70vh',marginLeft:'40px',float:'right'}}>
                {todo.map(item=><Todo item={item} key={item.id} onDeleteTodo={deleteTask} />)}
                {/* <Todo/>
                <Todo/> */}
                

            </div>
        </div>

       
        </div>
        </div>
    )
}
export default Home