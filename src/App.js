import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  //usestate custom hooks
  //we have access of variable we can access setTodos is our setter function
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function handleSubmit(e) {
    // if we dont add eventpreventDefault, page wont refresh when we add todo item
    e.preventDefault();
    const newTodo = {
      //we need a unique value here
      id: new Date().getTime(),
      //matched up with our todo hook we did earlier
      text: todo,
      completed: false,
    };
    // ...spread opertor used when you want to add a new item to a local data store, or display all stored items plus a new addition
    //concat will add our new objects onto our todos
    setTodos([...todos].concat(newTodo));
    //reset input
    setTodo("");
  }
  //were passing in the id. which is the todo.id
  function deleteTodo(id) {
    // were spreading it and filter it which is like map, in filter if you return a truthy value, it retur that element in that array, falsy it will not
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      {/* onSubmit will run any time a button with submit is clicked */}
      <form onSubmit={handleSubmit}>
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
      {/* should display our todos to the screen */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          {/* delete button call deleteTodo function and passing in what you want to delete todo.id */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          {/* checkbox, checked todo boolean value */}
          <input
            type="checkbox"
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
