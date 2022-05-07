/* eslint-disable no-unused-vars */

import Header from './components/Header';
import Tasks from './components/Tasks';
import { StyledPaperExample } from './components/styles/Button.styled';
import { ThemeProvider } from 'styled-components';
import AddTask from './components/AddTask';
import reminderImage from './asset/reminder.jpg';
import { useState, useEffect } from "react"
import { Container } from './components/styles/Container.styled';
import Item from './components/toturialComponents/Item';

import MainHeader from './components/RouterPages/MainHeader';
import MainNav from './components/RouterPages/MainNav';
import MainFooter from './components/RouterPages/MainFooter';
import Home from './components/RouterPages/Home';
import NewPost from './components/RouterPages/NewPost';
import About from './components/RouterPages/About';
import Missing from './components/RouterPages/Missing';
import Post from './components/RouterPages/Post';
import PostList from './components/RouterPages/PostList';



import {Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import { StyledHeader } from './components/styles/Header.styled'


function App() {
  const name = 'mehdi saedi'
  const [flagItemOrTask, setTaskItemFlag] = useState(false);
  const [item, SetItem] = useState([
    {
      id: 1,
      item: 'hello',
      flag: false
    },
    {
      id: 4,
      item: 'hello',
      flag: false
    },
    {
      id: 3,
      item: 'hello',
      flag: false
    },
    {
      id: 2,
      item: 'hello',
      flag: false
    },
  ])

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
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  const addTask = (object) => {
    console.log("this is object", object);
    const newTask = {
      id: '',
      text: '',
      day: '',
      reminder: false
    }
    newTask.id = Math.random() * 100 + 1;
    newTask.text = object.task;
    newTask.day = object.day;
    newTask.reminder = object.reminder;
    setTasks(tasks => [...tasks, newTask])
    console.log("added new task", tasks);

  }
  const theme = {
    colors: {
      header: '#ebfbff',
      body: ''
    }
  }
  return (

    <Router>

      <MainHeader/>
    <Container>
     
      <div style={{margin:'0 auto',minHeight:'30rem'}}>

      <Routes  >
      <Route path="/about" element={<About/>} />
      </Routes>
      </div>
   
      </Container>
      <MainFooter />


      {/*  <Header />
    
       <h1>hello from {name}</h1>
       <hr></hr>
       <br></br>
      
     <AddTask onAddTask={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onChangeReminder={reminder} /> : <h2>nothing to show</h2>}
   
    <Container>
      <StyledHeader bg='#2314234223'>
        <h1>this is test header</h1>
      </StyledHeader > */}
      <Item></Item>
    </Router>







  );
}

export default App;
