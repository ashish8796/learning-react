import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/rootReducer";

const TodoList = () => {
  const todos = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <>
      {
        Array.isArray(todos) && todos.map(item => (
          <div className="todo" id={item.id}>
            <div className="todo-value">
              <input type="checkbox" className="ckbox" id={item.id} checked={item.isCompleted} onClick={() => {
                dispatch(actions.completeTodo(item.id))
              }} />
              <p id={item.id}>{item.value}</p>
            </div>
            <button id={item.id} className="delete" onClick={() => {
              dispatch(actions.deleteTodo(item.id))
            }}>X</button>
          </div>
        ))
      }
    </>);
}

export default TodoList