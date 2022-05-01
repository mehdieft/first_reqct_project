import reminderImage from '../asset/reminder.jpg'
const Task = ({ task, onDelete, onChangeReminder }) => {
    return (
        <div style={divStyle}>
            <div onDoubleClick={() => onChangeReminder(task.id)} >
                <div style={{display:'inline-block',width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'red'}}>
                <img src={reminderImage}width="100px" alt="nothin to show" height="100px" style={{borderRadius:'50%'}}/>

                </div>
                <h3>{task.text}</h3>
                <h6 style={date}>{task.day}</h6>
                {task.reminder ? <span style={{ padding: '20px', backgroundColor: 'green' }}>reminder On</span> : <span style={{ padding: '20px', backgroundColor: 'red' }}>reminderOff</span>}
                <button onClick={() => onDelete(task.id)}> delete Task</button>
            </div>
        </div>
    )
}
const divStyle = {
    minHeight: '300px',
    boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    maxWidth: '300px',
    marginBottom:'32px',
    borederRadius: '5px',
    minWidth: '300px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    // backgroundImage: `url(${reminderImage})`
}
const date={
  

}
export default Task