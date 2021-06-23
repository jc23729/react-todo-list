import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  //usestate custom hooks
  //we have access of variable we can access setTodos is our setter function
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  return (
    <div className="App">
      {/* onSubmit will run any time a button with submit is clicked */}
      <form onSubmit={}>
        {/*we pass in an arrow function and pass text we want to set, e is simply a form event*/}
        {/*e= event or form event, target is the input we created, value is the value of that input*/}
        {/* value={todo} is two way data binding, make sure the value is set to todo */}
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
