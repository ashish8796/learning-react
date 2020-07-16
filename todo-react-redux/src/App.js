import React from 'react';
import { Provider } from 'react-redux';
import TodosUI from './componets/TodosUI';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <TodosUI />
    </Provider>
  );
}

export default App;
