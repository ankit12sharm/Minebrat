import React, {useEffect, useState} from 'react'

const CitiesList = ({id,setSelectCity}) => {
  const [cities, setCities] = useState([])
  useEffect(()=>{
    console.log(id);
    fetch(`https://corsproxy.io/?https://api.minebrat.com/api/v1/states/cities/${id}`)
    .then((res) => res.json())
    .then((data) => setCities([...data]))
    .catch((e) => console.log(e));
    console.log(cities);
  },[id])
  return (
    <>
    <select onChange={(e)=> setSelectCity(e.target.value)} >
        <option value=''>select state</option>
        {cities.map((e)=>(
            <option key={e.cityId} value={e.cityName}>{e.cityName}</option>
        ))}
    </select>
    </>
  )
}

export default CitiesList