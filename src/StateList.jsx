import React, { useEffect, useState } from "react";


const StateList = ({setState, setId}) => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    fetch("https://corsproxy.io/?https://api.minebrat.com/api/v1/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((e) => console.log(e));
  }, []);
  useEffect(()=>{},[])
  return <>
    <select onChange={(e)=>{ 
        setId(e.target.value.split(' ')[0])
        setState(e.target.value.split(' ')[1])
        }} >
        <option value="">select state</option>
        {states.map((e)=>(
            <option key={e.stateId} value={`${e.stateId} ${e.stateName}`}>{e.stateName}</option>
        ))}
    </select>
  </>;
};

export default StateList;