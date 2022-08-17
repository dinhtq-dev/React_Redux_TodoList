import "./App.css";

import React, { useState, useMemo, forwardRef, useRef, useEffect } from "react";
import Header from "./components/Header";

const InputRefs = forwardRef((props, ref) => {
  return <div {...props}>refsdfds</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({ name: "234234" });
  const inputRefs = useRef();
  const data = useMemo(
    () => ({
      name: "dinthq",
      age: 34,
    }),
    []
  );
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("sdf", inputRefs);
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <Header profile={profile} data={data}></Header>
      <label>Count: {count}</label>
      <InputRefs ref={inputRefs} />
    </div>
  );
}

export default App;
