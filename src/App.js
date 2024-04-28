import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div style={{paddingBottom: "10px"}}>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
