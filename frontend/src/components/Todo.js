import { FiTrash } from "react-icons/fi";
const Todo=({item})=>{
    console.log(item)
    return (
        <div className="my-2" style={{padding:'20px',border:'1px solid black',borderRadius:'4PX'}}>
            <h2  style={{backgroundImage:'linear-gradient(to right, rgba(255,0,0,0), rgb(0 255 153))',color:'black'}} className=" text-center bg-red">
             {item.title}
                <button style={{float:'right'}} className="btn float-right"><FiTrash/></button>
            </h2>
            <p className="p-3">{item.content}</p>
            

        </div>

    )
}
export default Todo;