import './App.css';
import Header from './components/Header';


function App() {
  const name='mehdi saedi'
  return (
    <div className="App">
      <Header />
      {/* every thing must be in this parent html */}
      <h1>hello from {name}</h1>
      <hr></hr>
      
     
    </div>
  );
}

export default App;
