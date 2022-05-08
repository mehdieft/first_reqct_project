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
    console.log(todo);
    return (
        <div style={{backgroundColor:'red'}}>

        <div className="row container  m-auto" style={{backgroundColor:'red'}}>
       
        <div className=" text-center">

            <div style={{display:'inline-block',width:'50vh',height:'50vh'}}>
                <TodoField />

            </div>
            <div style={{display:'inline-block', width:'70vh',marginLeft:'40px',float:'right'}}>
                {todo.map(item=><Todo item={item} />)}
                {/* <Todo/>
                <Todo/> */}
                

            </div>
        </div>

       
        </div>
        </div>
    )
}
export default Home