/* eslint-disable no-unused-vars */
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';










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
        <form onSubmit={onSubmit} style={{width:'400px',marginRight:'20px',display:'inline-block'}} >
            <FormGroup style={{width:'300px',display: 'inline-block'}}>

            <TextField id="standard-basic"  onChange={(e)=>{setTask(e.target.value)}} value={task} label="please enter task" variant="standard" />
            <TextField id="standard-basic" onChange={(e)=>{setDay(e.target.value)}} value={day} label="please enter day" variant="standard" />
            <FormControlLabel control={<Checkbox checked={reminder} value={reminder}  onChange={(e)=>{setReminder(e.currentTarget.checked)}} />} label="reminder"  />
            <Button varient="outlined" type="submit">submit task</Button>
            </FormGroup>
          
            {/* <br></br>
            <div style={{marginTop:'40px'}}></div>
            <input placeholder="please enter the task" type="text"  />
            <input placeholder="please enter the day" type="text"  /> */}
            {/* <input placeholder="please enter the task" type="checkbox" checked={reminder}  onChange={(e)=>{setReminder(e.currentTarget.checked)}}  value={reminder} /> */}

        </form>
    )


}







export default AddTask