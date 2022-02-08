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
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo==="") {
      return; // toDo가 mepty면 이 함수를 실행시키지 않는다
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // 키워드 입력 후 submit하면 input창을 비워준다.
  };
    console.log(toDos);

    // setToDos(function(currentArray)){ 위와 똑같은 기능을 한다.
    //   return ;
    // }

  return (
    <div>
      <h1>MY TO DOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} 
      value={toDo}
      text="text"
      placeholder="Write your to do!"
      ></input>
      <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
