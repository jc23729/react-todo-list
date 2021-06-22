import react from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  //usestate custom hooks
  //we have access of variable we can access setTodos is our setter function
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  return (
    <div className="App">
      <form>
        
      </form>
    </div>
  );
}

export default App;
