import { useState } from "react";
import "./home.css";

function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [ongoing, setOngoing] = useState("");

  const startTodo = () => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setOngoing(updatedTodos);
    setTodos("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <div className="container">
      <h1>todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          className="input"
          id="input"
          placeholder="Enter your todo"
          autoComplete="off"
          required
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="button">Add</button>
      </form>

      <ul className="todos" id="todos">
        <li>
          <span className="status">Not Started</span>
          <ul className="ns-ul">
            {todos.map((todo) => (
              <li className="li-dynamic" key={todo.id}>
                {todoEditing === todo.id ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                  />
                ) : (
                  <span>{todo.text}</span>
                )}

                {todoEditing === todo.id ? (
                  <span
                    className="material-symbols-outlined icons "
                    onClick={() => editTodo(todo.id)}
                  >
                    save
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined icons"
                    onClick={() => setTodoEditing(todo.id)}
                  >
                    edit
                  </span>
                )}

                <span
                  onClick={() => deleteTodo(todo.id)}
                  className="material-symbols-outlined icons"
                >
                  delete
                </span>
                <span
                  onClick={() => startTodo(todo.id)}
                  className="material-symbols-outlined icons"
                >
                  arrow_forward
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="status">Ongoing</span>
          <ul className="ns-ul">
            {todos.map((todo) => (
              <li className="li-dynamic" key={todo.id}>
                {todoEditing === todo.id ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                  />
                ) : (
                  <span>{ongoing.text}</span>
                )}

                {todoEditing === todo.id ? (
                  <span
                    className="material-symbols-outlined icons "
                    onClick={() => editTodo(todo.id)}
                  >
                    save
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined icons"
                    onClick={() => setTodoEditing(todo.id)}
                  >
                    edit
                  </span>
                )}

                <span
                  onClick={() => deleteTodo(todo.id)}
                  className="material-symbols-outlined icons"
                >
                  delete
                </span>
                <span
                  onClick={() => startTodo(todo.id)}
                  className="material-symbols-outlined icons"
                >
                  arrow_forward
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="status">Completed</span>
          <ul className="ns-ul">
            <li className="todo-text">Wake up!</li>
            <li className="icons">
              <span className="material-symbols-outlined">edit</span>
            </li>
            <li className="icons">
              <span className="material-symbols-outlined">delete</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Home;
