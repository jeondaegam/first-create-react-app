import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {setCounter((prev) => prev + 1);}
  
  console.log("I run all the time");

  const iRunOnlyOnce = () => {
    console.log("CALL THE API,,,");
  }

  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API ...");
  }, [])
  
  // <Button onClick={onClick} text="hey your button here"/>
  return (
    <div><h1 className={styles.title} >{counter}</h1>
    <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
