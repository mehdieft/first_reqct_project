import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const name='mehdi saedi'
  const [tasks,setTasks]=useState([{
    id:1,
    text:'dsafgsdjgfasdfhgsadhfksah',
    day:'dasjkhdasgjagfkghsfagjk',
    reminder:true
},
{
    id:2,
    text:'dsafgsdjgfasdfhgsadhfksah',
    day:'dasjkhdasgjagfkghsfagjk',
    reminder:true
},
{
    id:3,
    text:'dsafgsdjgfasdfhgsadhfksah',
    day:'dasjkhdasgjagfkghsfagjk',
    reminder:true
},
{
    id:4,
    text:'dsafgsdjgfasdfhgsadhfksah',
    day:'dasjkhdasgjagfkghsfagjk',
    reminder:true
},
{
    id:5,
    text:'dsafgsdjgfasdfhgsadhfksah',
    day:'dasjkhdasgjagfkghsfagjk',
    reminder:true
}])
  return (
    <div className="App">
      <Header />
      {/* every thing must be in this parent html */}
      <h1>hello from {name}</h1>
      <hr></hr>
      <br></br>
      <Tasks tasks={tasks} />
      
     
    </div>
  );
}

export default App;
