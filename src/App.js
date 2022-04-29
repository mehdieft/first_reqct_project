import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const name = 'mehdi saedi'
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
  {
    id: 1,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
  {
    id: 1,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
  {
    id: 1,
    text: 'remind me to learn programing propbly',
    day: '19_december_2022',
    reminder: false
  },
  {
    id: 2,
    text: 'dsafgsdjgfasdfhgsadhfksah',
    day: 'dasjkhdasgjagfkghsfagjk',
    reminder: true
  },
  {
    id: 3,
    text: 'dsafgsdjgfasdfhgsadhfksah',
    day: 'dasjkhdasgjagfkghsfagjk',
    reminder: true
  },
  {
    id: 4,
    text: 'dsafgsdjgfasdfhgsadhfksah',
    day: 'dasjkhdasgjagfkghsfagjk',
    reminder: true
  },
  {
    id: 5,
    text: 'dsafgsdjgfasdfhgsadhfksah',
    day: 'dasjkhdasgjagfkghsfagjk',
    reminder: true
  }])
  const deleteTask = (id) => {
    console.log("this is id -----><", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const consoleMe = () => {
    console.log("this is test");
  }
  const reminder = (id) => {
    console.log("reminder working", id)
  }

  return (
    <div className="App">
      <Header />
      {/* every thing must be in this parent html */}
      <h1>hello from {name}</h1>
      <hr></hr>
      <br></br>
      <button onClick={consoleMe}>test me</button>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onChangeReminder={reminder} /> : <h2>nothing to show</h2>}


    </div>
  );
}

export default App;
