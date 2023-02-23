import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import "./App.css";

const RgbToHex = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [showHex, setShowHex] = useState(false);
  const [hex, setHex] = useState();
  const [copiedHex, setCopiedHex] = useState(false);

  const valueToHex = (c) => {
    var hex = c.toString(16);
    return hex;
  };

  const rgbToHex = (r, g, b) => {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  };

  const handleConvert = () => {
    setHex(rgbToHex(+red, +green, +blue));
    setRed("");
    setGreen("");
    setBlue("");
    setShowHex(true);
    setCopiedHex(false);
  };

  return (
    <div className="card-color">
      <label>
        R:
        <input type="number" value={red} onChange={(e) => setRed(e.target.value)} />
      </label>
      <label>
        G:
        <input type="number" value={green} onChange={(e) => setGreen(e.target.value)} />
      </label>
      <label>
        B:
        <input type="number" value={blue} onChange={(e) => setBlue(e.target.value)} />
      </label>

      {showHex ? (
        <div className="hex-color-code">
          <div
            className="show-color-hex"
            style={{ backgroundColor: `#${hex}` }}
          ></div>
          <p>{`#${hex}`}</p>
          <CopyToClipboard text={`#${hex}`} onCopy={() => setCopiedHex(true)}>
            <button className="copy-btn">
              <MdContentCopy />
            </button>
          </CopyToClipboard>
          {copiedHex ? (
            <span style={{ color: "green", paddingLeft: "5px" }}>copied.</span>
          ) : null}
        </div>
      ) : null}

      <button onClick={handleConvert} className="convert-btn">
        Convert To HEX
      </button>
    </div>
  );
};

export default RgbToHex;
