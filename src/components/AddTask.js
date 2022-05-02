/* eslint-disable no-unused-vars */
import {useState} from 'react'
import TextField from '@mui/material/TextField';








const AddTask=({onAddTask})=>{
    const [task,setTask]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setReminder]=useState('');
    const [formValidate,setFormValidate]=useState(false);
    const onSubmit=(e)=>{
        console.log("this is form event",e)
        e.preventDefault();
        
        if(!task){
            alert('emptying task');
            return;
        }
            onAddTask({task,day,reminder});
            setTask('');
            setDay('');
            setReminder(false);

        
    }









    return (
        <form onSubmit={onSubmit} >
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <input placeholder="please enter the task" type="text"  onChange={(e)=>{setTask(e.target.value)}} value={task} />
            <input placeholder="please enter the day" type="text"  onChange={(e)=>{setDay(e.target.value)}} value={day}/>
            <input placeholder="please enter the task" type="checkbox" checked={reminder}  onChange={(e)=>{setReminder(e.currentTarget.checked)}}  value={reminder} />
            <button type="submit">submiddt</button>

        </form>
    )


}







export default AddTask