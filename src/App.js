import { useEffect, useState } from "react";
import Activity from "./Activity";

function App() {
  //const [items, setItems] = useState([]);

  /*useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
  },[]);*/
  const activ = 'Some other message';

  return (
    <>
    
    <div>
      <h1>React-Bore-DOM</h1>
      <p>Click the Button get a Random activity</p>
      <Activity activ={ activ } />
      <button>New Random activity</button>
    </div>
    </>
  );
}

export default App;
