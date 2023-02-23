import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const HexToRgb = () => {
  const [rgb, setRgb] = useState();
  const [hex, setHex] = useState("#000");
  const [showRgb, setShowRgb] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false);

  const fullHex = (hex) => {
    let r = hex.slice(1, 2);
    let g = hex.slice(2, 3);
    let b = hex.slice(3, 4);

    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);

    return `rgb(${r},${g},${b})`;
  };

  //convert hex to rgb
  const hex2rgb = (hex) => {
    if (hex.length === 5) {
      window.alert("Please enter 6 digits color code !");
    }

    if (hex.length === 4) {
      return fullHex(hex);
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r},${g},${b})`;
  };

  const handleConvert = () => {
    setRgb(hex2rgb(hex));
    setShowRgb(true);
    setCopiedRgb(false);
    setHex("");
  };

  return (
    <div className="card-color">
      <label>
        HEX:
        <input value={hex} onChange={(e) => setHex(e.target.value)} />
      </label>
      {showRgb ? (
        <div className="hex-color-code">
          <div
            className="show-color-hex"
            style={{ backgroundColor: rgb }}
          ></div>
          <div>{rgb}</div>
          <CopyToClipboard text={rgb} onCopy={() => setCopiedRgb(true)}>
            <button className="copy-btn">
              <MdContentCopy />
            </button>
          </CopyToClipboard>
          {copiedRgb ? (
            <span style={{ color: "green", paddingLeft: "5px" }}>copied.</span>
          ) : null}
        </div>
      ) : null}

      <button onClick={handleConvert} className="convert-btn">
        Convert To RGB
      </button>
    </div>
  );
};

export default HexToRgb;
