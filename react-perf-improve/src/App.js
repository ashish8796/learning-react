import './App.css';
import MemoizationPractice from './memoizationPractice/MemoizationPractice';
import OptimizeLargeRendering from './optiomizeLargeRendering/OptimizeLargeRendering';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OptimizeLargeRendering />
        <MemoizationPractice />
      </header>
    </div>
  );
}

export default App;
