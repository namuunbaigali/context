import React, { useEffect } from "react";
import { useRef } from "react";

const token = 1234;

export default function RefDemo() {
  const value = useRef("");
  const inputParent = useRef(null);

  const handleInput = (e) => {
    value.current += e.target.value;
    inputParent.current.childNodes[value.current.length].focus();
  };

  const handleFocus = (e) => {
    const length = value.current.length;
    if (length === 4) {
      inputParent.current.childNodes[3].focus();
    } else {
      inputParent.current.childNodes[length].focus();
    }
  };

  useEffect(() => {
    inputParent.current.childNodes[0].focus();
  }, []);
  return (
    <div className="otp-example" ref={inputParent}>
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
    </div>
  );
}
