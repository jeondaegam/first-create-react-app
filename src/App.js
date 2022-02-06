import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter((prev) => prev + 1);}
  const onChange = (event) => {setKeyword(event.target.value);}

  console.log("I run all the time");
  
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >5 ) {
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]); // keyword가 변화할 때만 실행된다.

  // 이것이 빈값일땐 1번만 실행되는 이유이다.
  // 빈 값일 경우 react가 지켜볼게 아무것도 없으니까 1번만 실행됨.
  
  // <Button onClick={onClick} text="hey your button here"/>
  return (
    <div>
    <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
    <h1 className={styles.title}>{counter}</h1>
    <button onClick={onClick}>Click me</button>
    <h3>{keyword}</h3>
    </div>
  );
}

export default App;
