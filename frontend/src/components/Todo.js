import { FiTrash } from "react-icons/fi";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {BsPencilFill}  from "react-icons/bs";
import {useState} from 'react';
const Todo=({item,onDeleteTodo})=>{
   
    const [title,titleState]=useState(item.title);
    const [content,contentState]=useState(item.content)
    return (
        <div className="my-2" style={{padding:'20px',border:'1px solid black',borderRadius:'4PX'}}>
            <h2  style={{backgroundImage:'linear-gradient(to right, rgba(255,0,0,0), rgb(0 255 153))',color:'black'}} className=" text-center bg-red">
             {title}
                <button onClick={()=>onDeleteTodo(item.id)} style={{float:'right'}} className="btn float-right"><FiTrash/></button>
                <button className="btn btn-danger" style={{float:'right'}} ><BsPencilFill/></button>
            </h2>
            <p className="p-3 text-white">{content}</p>
            

        </div>

    )
}
export default Todo;