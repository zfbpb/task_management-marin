import React, { useContext } from 'react'
import '../Main/main.scss'
import { ThemeContext } from '../../Theme'

const Main = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`mainContainer ${theme}`}>
        Main
        <h1>some</h1>
        <button>some</button>
    </div>
  )
}

export default Main