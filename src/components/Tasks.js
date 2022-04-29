
import Task from './Task'
const Tasks=({tasks})=>{
    
    return (
        <div style={{display: 'flex',flexDirection:'row',maxWidth:'90%'}}>
        {tasks.map((task)=>( (<Task key={task.id} text={task.text} day={task.day} reminder={task.reminder} />)))}
        </div>

    )
}
export default Tasks