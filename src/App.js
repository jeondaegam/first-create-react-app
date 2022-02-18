import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollor, setDollor] = useState(1);
  const [coinPrice, setCoinPrice] = useState(1);
  
  // <select>의 값이 변경되면 새로운 값을 dollor에 저장.
  const selectOnChange = (event) => {
    setCoinPrice(event.target.value);
    setDollor(1);
    console.log(event.target.value);
    }

  // <input>에 값이 입력되면 dollor에 저장.
  const handleInput = (event) => {
    setDollor(event.target.value);
    console.log("inputDollor:", dollor);
    }
    

  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
          setCoins(json); // json data를 coins에 저장
          setLoading(false); // loading을 끝낸 후 종료 
        }); 
  }, []);

  const selectedCoin = {
    name: "",
    price: 1, 
  }

  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading</strong> : 
                <select onChange ={selectOnChange}>
                {coins.map((coin) => (
                <option 
                id = {coin.name} 
                value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                </option>))}
            </select>
    }
    <br/>

    <b>how much money do you wanna exchange to coins? </b>    
    <input type="number" value={dollor} onChange={handleInput} placeholder="Write price want to change"/>
    {    dollor === "" ?  "" : <h3>you can get {dollor/coinPrice}</h3>}
    </div>
  );
}


export default App;
