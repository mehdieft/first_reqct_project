/* eslint-disable no-unused-vars */

import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';
import reminderImage from './asset/reminder.jpg';
import {Container} from './components/styles/Container.styled';
import {StyledPaperExample} from './components/styles/Button.styled';
import {ThemeProvider} from 'styled-components'



import {StyledHeader} from './components/styles/Header.styled'


function App() {
  const name = 'mehdi saedi'
 
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
  {
    id: 12,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
 ])
  const deleteTask = (id) => {
    console.log("this is id -----><", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const consoleMe = () => {
    console.log("this is test");
  }
  const reminder = (id) => {
    console.log("reminder working", id)
    setTasks(tasks.map((task)=>task.id===id ? { ...task, reminder: !task.reminder    }:task))
  }
  const addTask=(object)=>{
    console.log("this is object",object);
    const newTask={
      id:'',
      text:'',
      day:'',
      reminder:false
    }
    newTask.id=Math.random()*100+1;
    newTask.text=object.task;
    newTask.day=object.day;
    newTask.reminder=object.reminder;
   setTasks(tasks=>[...tasks,newTask])
    console.log("added new task",tasks);

  }
const theme={
  colors:{
    header:'#ebfbff',
    body:''
  }
}
  return (

   <Container>
      
      
      <Header />
    
       <h1>hello from {name}</h1>
       <hr></hr>
       <br></br>
     <AddTask onAddTask={addTask}/>
       {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onChangeReminder={reminder} /> : <h2>nothing to show</h2>}
   
    
    <Container>
      <StyledHeader bg='#2314234223'>
        <h1>this is test header</h1>
      </StyledHeader >
    </Container>

</Container>
  
   




  );
}

export default App;
