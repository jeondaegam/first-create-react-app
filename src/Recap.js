import { useEffect, useState } from "react"

function Recap () {
    const [usersMoney, setUsersMoney] = useState(0);
    const [coins, setCoins] = useState([]); // 초기값 : 빈 배열
    const [selectCoin, setSelectCoin] = useState("");
    const onChange = (event) =>{
        setUsersMoney(event.target.value);
    }

    const selectOnChange = (event) => {
        setSelectCoin(event.target.value);
        console.log(event.target.value);
        console.log(event.target.id);
        console.log(event[event.selectedIndex].id);
        // option id 가져오는 방법
    }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
              setCoins(json);
            }
            // 데이터 개수 세어서 10개까지만 들고오기.
        )
    },[]); // 처음 한번만 실행될 것이므로 2번째 argument는 빈 배열

    return (
        <div>
            <h2>The Coins!</h2>

            <select onChange={selectOnChange}>
                {coins.map((coin) => (
                <option
                id={coin.name}
                value={coin.quotes.USD.price}
                >
                {coin.name} : ({coin.symbol}) : {coin.quotes.USD.price} USD
                </option>))}
            </select>


            <h3>How much coins do you wanna exchange ? </h3>
            
            <input type="number" value={usersMoney} onChange={onChange}></input>
            <button>Exchange</button>
            <br/>
            
            {selectCoin === "" ? "" :<h3>your select is {selectCoin} </h3>}
            you have ${usersMoney} 
        
        </div>
    )
}

export default Recap