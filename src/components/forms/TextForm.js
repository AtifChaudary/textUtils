import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  
  const handleUpClick = (props) => {
    setText(text.toUpperCase());
  };

  const handleLowClick = (props) => {
    setText(text.toLowerCase());
  };

  const handleClearClick = (props) => {
    setText('');
  };

  const convertToBold = (props) => {
    if (textRef.current && buttonRef.current) {
      buttonRef.current.style.opacity = buttonRef.current.style.opacity === '1' ? '0.5' : '1';
      textRef.current.style.fontWeight = textRef.current.style.fontWeight === 'bold' ? 'normal' : 'bold';
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <button className="btn btn-secondary" onClick={convertToBold} ref={buttonRef} style={{opacity: 0.5}}>B</button>
        </div>
        <div className="mb-3">
          <textarea
            ref={textRef}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-secondary mx-3" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-warning" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container"></div>
      <div className="container mt-5">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
