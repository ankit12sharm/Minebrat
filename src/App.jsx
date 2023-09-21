import { useEffect, useState } from 'react'
import './App.css'
import StateList from './StateList'
import CityList from './CityList'
import Result from './Result'


function App() {
  const [state, setState] = useState('')
  const [id, setId] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [result , setResult] = useState(false)
  
  return (
    <>
    <StateList setState={setState} setId={setId}/>
    <CityList id={id} setSelectCity={setSelectCity}/>
    <button onClick={()=> setResult(true)}>submit</button>
    {result? <Result selectCity={selectCity} selectState={state}/>:null}
   
    </>
  )
}

export default App