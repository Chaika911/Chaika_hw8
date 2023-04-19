import { useState } from 'react';
import Clock from '../Clock/Clock';
import './App.css';
import MemoComponent from '../MemoComponent/MemoComponent';

function App() {

  const [hide, setHide] = useState(true);

  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <button onClick={() => {
        setHide(!hide)
      }}>on/off</button>

      {hide && <Clock />}

      <MemoComponent count={count} text={text} handleClick={handleClick} />
      <button onClick={() =>
        setText("Hello World")}>
          Change Text
      </button>
    </div>
  );
}

export default App;
