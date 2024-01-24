
import './App.css'
import { useContext, useState } from 'react'
import { mainContext } from './context/mainProvider'

function App() {
  const {setCity} = useContext(mainContext)
  const [input, setInput] = useState("")
  

  const getCity = () => {
    setCity(input)
  }
  return (
    <>
      <div>
        <input type="text" onChange={(event) => setInput(event.target.value)} placeholder='Search location...'/>
        <button onClick={getCity} >Search Location</button>
      </div>
    </>
  )
}

export default App
