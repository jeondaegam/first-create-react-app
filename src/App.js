import styles from "./App.module.css"
import { useEffect, useState } from "react";


function Hello() {
  
  useEffect(()=> {
    console.log("hi :)");
    return () => console.log("bye :("); 
    // class가 메모리를 반납하며 return하는것과 비슷한 느낌..
    // <h1> 컴포넌트가 사라질 때 실행한다.
  },[]);

  return <h1>Hello</h1>; 
}


function App() {
  const [showing, setShowing] = useState(true);
  const onClick = () => setShowing(prev => !prev)

  return (
    <div>
      {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
