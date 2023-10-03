import React, { useContext } from 'react'
import '../Main/main.scss'
import { ThemeContext } from '../../Theme'
import PlatformLaunch from '../../Components/PlatformLaunch'
import MarketingPlan from '../../Components/MarketingPlan'
import RoadMap from '../../Components/RoadMap'

const Main = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`mainContainer ${theme}`}>
        <PlatformLaunch/>
        <MarketingPlan/>
        <RoadMap/>
    </div>
  )
}

export default Main