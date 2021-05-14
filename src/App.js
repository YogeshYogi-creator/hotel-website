import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {startGetHolels} from './actions/hotelsList_Action'
import List from './List'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(startGetHolels())
  },[dispatch])

  let data = useSelector((state)=>{
        return state.hotelsData
    })
    // console.log("list", data)


  const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    if(input.length > 0){
        data = data.filter((ele) => {
            return ele.country.toLowerCase().match(input)
        })
    }

  return (
    <div className = "container">
      <div>
        <h1 className = "display-4" style = {{textAlign: "center"}}>La-Hotel</h1>
      </div>
      <hr/>
      <div>
          <div>
                <input type = "text" placeholder = "search by country" onChange = {handleInputChange} value = {input}/>
          </div>
          <div style = {{overflow: "scroll", height: "480px", position: "relative", top: "15px"}}>
            <List data = {data}/>
          </div>
      </div>
    </div>
  )
}
export default App