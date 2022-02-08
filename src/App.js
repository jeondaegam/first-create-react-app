import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter((prev) => prev + 1);}
  const onChange = (event) => {setKeyword(event.target.value);} 
  // onChange로 keyword의 변화를 감지하면, value를 수정한다.

  // console.log("I run all the time");  
  // useEffect(iRunOnlyOnce, []);

  useEffect( () => {
    console.log("I run only once")}, []
  );

  useEffect(() => {}, []);
  // keyword가 변화할 때만 코드를 실행한다.
  useEffect(()=> {
    console.log("I run when 'keyword' changes.");
    console.log('keyword: ', keyword);
  }, [keyword]);

  useEffect(()=> {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change")
  }, [keyword, counter]);

  // 이것이 빈값일땐 1번만 실행되는 이유이다.
  // 빈 값일 경우 react가 감지할 값이 없기때문에 처음 1번만 실행된다.
  
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
