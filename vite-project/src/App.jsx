import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => ++count);
  };

  const [display, changeDisplay] = useState(false);
  const change = () => {
    changeDisplay((display) => !display);
  };

  const [name, setName] = useState("");
  const showChange = (event) => {
    setName(event.target.value);
  };

  const [color, setColor] = useState("green");
  const changeColor = () => {
    return setColor(color === "green" ? "red" : "green");
  };
  const style = {
    color: color,
  };
  return (
    <>
      <div>
        <p>Count - {count}</p>
        <button onClick={increase}>++count</button>
      </div>

      <div>
        {display && <p>Now you see the text</p>}
        <button onClick={change}>display text above</button>
      </div>

      <div>
        <label>
          Input name:
          <input type="text" value={name} onChange={showChange} />
        </label>
        <p>Hello, {name}</p>
      </div>

      <div>
        <p style={style}>Multicolor text</p>
        <button onClick={changeColor}>Change color of the text above</button>
      </div>
    </>
  );
}

export default App;
