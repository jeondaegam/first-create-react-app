import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return(
    <div>
      <h1>{loding===true? "Loading..." : ""}</h1>
    </div>
  )
}


export default App;
