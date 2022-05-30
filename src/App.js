import { useEffect, useState } from "react";
import Activity from "./Activity";
import axios from 'axios'

function App() {
  const [activ, setActiv] = useState([]);

  /*useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        }
      )
  },[]);*/

  useEffect(() => {
    axios.get('https://www.boredapi.com/api/activity')
      .then (res => {
        console.log(res)
        setActiv(res.data)
      })

      .catch(err => {
        console.log(err)
      })
  }, [])

  //const activ = 'Some other message';

  return (
    <>
    
    <div>
      <h1>React-Bore-DOM</h1>
      <p>Click the Button get a Random activity</p>
      <Activity activ={ activ.activity } />
      <button>New Random activity</button>
    </div>
    </>
  );
}

export default App;
