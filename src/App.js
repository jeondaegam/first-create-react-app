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
          setLoading(false); // loading을 끝낸 후 종료 
        }); 
  }, []);

  // 원하는 dollor로 BTC 몇개를 살수있는가?
  //// usd를 vtc로ㅓ 전환 input을 만들고 20달러를 적으면
//얼만큼의 btc로 , 얼마만큼은 솔라나 폴카나 읹니

  const [dollor, setDollor] = useState("");
  const onChange = (event) => setDollor(event.target.value);
  
  const optionChange = (event) => console.log(event.target.id);
  
  // const [coinId, setCoinId] = usetState("");
  // const [coinPrice, setCoinPrice] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log( "$ " , dollor);
    setDollor("");
    // console.log(coin.name +",")
    // console.log(option);
  }
  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading</strong> : 
                <select onChane ={selectOnChange}>
                {coins.map((coin) => (
                <option id={coin.id} className ={coin.quotes.USD.price}>
                    {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                </option>))}
            </select>
    }
    <br/>
    <form onSubmit={onSubmit}>
    <input onChange={onChange} value={dollor} text="text" placeholder="Write price you want to change"/>
    <button>Conversion to BTC</button>
    </form>
    {dollor==="" ?  "" : <h1>you can buy ${dollor} BTC</h1>}
    </div>
  );
}

export default App;
