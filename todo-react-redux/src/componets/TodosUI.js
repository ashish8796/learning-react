import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { actions } from "../store/rootReducer";
import TodoList from "./subscribers";

function TodosUI() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(actions.addTodo(todo));
    setTodo('')
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">TODO</div>
        <article>
          <div className="todo-list">
            <TodoList />
          </div>
        </article>
        <section>
          <div className="add-todo">
            <form onSubmit={handleAddTodo}>
              <input
                type="text"
                id="add-todo"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TodosUI;