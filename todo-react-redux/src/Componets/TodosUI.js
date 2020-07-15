import React from "react";


function TodosUI() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">TODO</div>
        <article>
          <div className="todo-list"></div>
        </article>
        <section>
          <div className="add-todo">
            <form>
              <input type="text" id="add-todo" />
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TodosUI;