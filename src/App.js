import { useState } from "react";
import "./App.css";
import QRCodeCanvas from "./QRCOdeCanvas";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1 className="input-indicator">Coloque o link no campo abaixo</h1>
      <input onChange={(element) => setText(element.target.value)} value={text} placeholder="Link"/>
      <QRCodeCanvas text={text}/>
    </div>
  );
}

export default App;
