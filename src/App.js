import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  reset,
} from "./counter-app/actions/counterActions";

function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h3> Counter app ( amb react-redux )</h3>
        <p>{count}</p>
        <br />
        <button onClick={() => dispatchCounter(increaseCounter(1))}>+1</button>
        <br />
        <button onClick={() => dispatchCounter(increaseCounter(5))}>+5</button>
        <br />
        <button onClick={() => dispatchCounter(decreaseCounter(1))}>-1</button>
        <br />
        <button onClick={() => dispatchCounter(decreaseCounter(5))}>-5</button>
        <br />
        <button onClick={() => dispatchCounter(reset())}> Reset </button>
      </header>
    </div>
  );
}

export default App;
