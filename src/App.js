import "./App.css";
import Color from "./Color";
import HexToRgb from "./HexToRgb";
import RgbToHex from "./RgbToHex";

function App() {
  return (
    <div className="App">
      <h1>Colorvolki</h1>
      <div className="card">
        <Color />
        <RgbToHex />
        <HexToRgb />
      </div>
    </div>
  );
}

export default App;
