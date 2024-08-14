import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';

function App(){

  const [catFact, setCatFact] = useState("");

  const getCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((resp) => {
      setCatFact(resp.data.fact);
    });
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div>
      <button className='button-catfact' onClick={getCatFact}>
      GENERATE CAT FACTS
      </button>
      <p className='paragraph-catfact'> {catFact} </p>
    </div>
  )

};
export default App
