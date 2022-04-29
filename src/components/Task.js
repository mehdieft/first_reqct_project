import reminderImage from '../asset/reminder.jpg'
const Task = ({ task, onDelete, onChangeReminder }) => {
    return (
        <div style={divStyle}>
            <div onDoubleClick={() => onChangeReminder(task.id)} >
                <img src={reminderImage}width="64px" alt="nothin to show" height="64px"/>
                <h3>{task.text}</h3>
                {task.reminder ? <span style={{ padding: '20px', backgroundColor: 'green' }}>reminder On</span> : <span style={{ padding: '20px', backgroundColor: 'red' }}>reminderOff</span>}
                <button onClick={() => onDelete(task.id)}> delete Task</button>
            </div>
                <h6 style={date}>{task.day}</h6>
        </div>
    )
}
const divStyle = {
    minHeight: '300px',
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
  
    margin:'10% auto 5% auto',
}
export default Task