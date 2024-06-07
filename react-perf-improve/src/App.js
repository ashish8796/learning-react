import "./App.css";
import LazyLoadingPractice from "./lazyLoadingPractice/LazyLoadingPractice";
import MemoizationPractice from "./memoizationPractice/MemoizationPractice";
import OptimizeLargeRendering from "./optiomizeLargeRendering/OptimizeLargeRendering";
import ReactComponentPractice from "./reactComponentsPractice/ReactComponentPractice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OptimizeLargeRendering />
        <MemoizationPractice />
        <ReactComponentPractice />
        <LazyLoadingPractice />
      </header>
    </div>
  );
}

export default App;
