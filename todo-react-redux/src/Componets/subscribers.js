import React from "react";
import store from "../utils/store"

export const generateMarkup = (state) => {
  const markup = state.map(item => {
    return (
      <div className="todo" id={item.id}>
        <div className="todo-value">
          <input type="checkbox" className="ckbox" id={item.id} checked={item.isCompleted} onClick={() => {

          }} />
          <p id={item.id}>{item.value}</p>
        </div>
        <button id={item.id} className="delete">X</button>
      </div>
    )
  })
  return markup;
}