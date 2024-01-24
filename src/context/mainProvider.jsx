import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {

    const [data, setData] = useState({})
    const [city, setCity] = useState("")

    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1503a2b453d780cc27d3588bb1d0fe5&units=metric`)
            setData(resp.data)
            console.log(resp.data);
        }
        apiFetch()
    }, [city])

  return (
    <mainContext.Provider value={{data, setData, setCity, city}}>
        {children}
    </mainContext.Provider>
  )
}

export default MainProvider