import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Coverted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Coverted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const convertToBold = () => {
    if (textRef.current && buttonRef.current) {
      buttonRef.current.style.opacity =
        buttonRef.current.style.opacity === "1" ? "0.5" : "1";
      textRef.current.style.fontWeight =
        textRef.current.style.fontWeight === "bold" ? "normal" : "bold";
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <button
            className="btn btn-secondary"
            onClick={convertToBold}
            ref={buttonRef}
            style={{ opacity: 0.5 }}
          >
            B
          </button>
        </div>
        <div className="mb-3">
          <textarea
            atif={props.mode}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            ref={textRef}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>
          Convert to lower case
        </button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container"></div>
      <div className="container mt-5">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter(item => item.trim() !== '').length} words and {text.length} characters
        </p>
        <p>{text.split(" ").filter(item => item.trim() !== '').length * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text === ""
            ? "Enter something in the textbox above to preview it here"
            : text}
        </p>
      </div>
    </>
  );
}
