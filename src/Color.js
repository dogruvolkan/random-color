import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const Color = () => {
  const [colorRgb, setColorRgb] = useState();
  const [colorHex, setColorHex] = useState();
  const [copiedRgb, setCopiedRgb] = useState(false);
  const [copiedHex, setCopiedHex] = useState(false);

  const valueToHex = (c) => {
    var hex = c.toString(16);
    return hex;
  };

  const rgbToHex = (r, g, b) => {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  };

  const handleColor = () => {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    setColorRgb(`rgb(${red},${green},${blue})`);
    setColorHex(rgbToHex(red, green, blue));
    setCopiedHex(false);
    setCopiedRgb(false);
  };

  return (
    <div className="card-color">
      {colorRgb ? (
        <>
          <div
            className="show-color-box"
            style={{ backgroundColor: colorRgb }}
          ></div>
          <div className="color-code">
            <div className="color-code-hex">
              <p className="color-code2">{`#${colorHex}`}</p>
              <CopyToClipboard
                text={`#${colorHex}`}
                onCopy={() => setCopiedHex(true)}
              >
                <button className="copy-btn">
                  <MdContentCopy />
                </button>
              </CopyToClipboard>
              {copiedHex ? (
                <span style={{ color: "green", paddingLeft: "5px" }}>
                  copied.
                </span>
              ) : null}
            </div>
            <div className="color-code-rgb">
              <p className="color-code2">{colorRgb}</p>
              <CopyToClipboard
                text={colorRgb}
                onCopy={() => setCopiedRgb(true)}
              >
                <button className="copy-btn">
                  <MdContentCopy />
                </button>
              </CopyToClipboard>
              {copiedRgb ? (
                <span style={{ color: "green", paddingLeft: "5px" }}>
                  copied.
                </span>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <p>Let's create a new color</p>
      )}
      <button onClick={handleColor} className="create-color-btn">
        Create Color
      </button>
    </div>
  );
};

export default Color;
