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
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
          setCoins(json); // json data를 coins에 저장
          setLoading(false);
        }); 
  }, []);
  return (
    <div>
        <h1>The Coins!</h1>
        {loading ? <strong>Loading</strong> : null}
        <ul>
            {coins.map((coin) => (
            <li>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </li>))}
        </ul>
    </div>
  );
}

export default App;
