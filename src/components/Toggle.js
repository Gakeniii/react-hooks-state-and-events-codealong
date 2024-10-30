import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn)=> !isOn);
  }

  //if the button is on be red if not then white
  const color = isOn  ? "red" : "white";

  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
