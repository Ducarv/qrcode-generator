import { useState } from "react";
import "./App.css";
import QRCodeCanvas from "./QRCOdeCanvas";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input onChange={(element) => setText(element.target.value)} value={text}/>
      <QRCodeCanvas text={text}/>
    </div>
  );
}

export default App;
