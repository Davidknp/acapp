import { useEffect, useState } from "react";
import Activity from "./Activity";
import axios from 'axios'

function App() {
  const [activ, setActiv] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('http://www.boredapi.com/api/activity')
      .then (res => {
        console.log(res)
        setActiv(res.data)
      })

      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {activ} = await axios.get('http://www.boredapi.com/api/activity');

      console.log('data is: ', JSON.stringify(activ, null, 4));

      setActiv(activ);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
    
    <div>
      <h1>React-Bore-DOM</h1>
      <p>Click the Button get a Random activity</p>
      <Activity activ={ activ.activity } />
      <button onClick={handleClick}>New Random activity</button>
    </div>
    </>
  );
}

export default App;
