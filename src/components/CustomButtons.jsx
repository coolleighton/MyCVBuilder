import './CustomButtons.css'
import { useState } from 'react'

function CustomButtons() {

    const activeColor = "#F5F5F5"
    const inactiveColor = "white"
    
    const [contentActive, setContentActive] = useState(true)
    const [customiseActive, setCustomiseActive] = useState(false)

    const handleContentClick = () => {
        if (!contentActive) {
            setContentActive(true)
            setCustomiseActive(false)   
        }

    }

    const handleCustomiseClick = () => {
        if (!customiseActive) {
            setContentActive(false)
            setCustomiseActive(true)   
        }
    }

    return (
        <div className='CustomButtons'>
            <button
                style={{backgroundColor : contentActive ? activeColor : inactiveColor}}
                onClick={handleContentClick}
                >
                <img src="./src/assets/content-img.png"></img>
                <p>Content</p>
            </button>
            <button 
                style={{backgroundColor : customiseActive ? activeColor : inactiveColor}}
                onClick={handleCustomiseClick}>
                <img src="./src/assets/customise-img.png"></img>
                <p>Customize</p>
            </button>
        </div>
    ) 
}

export default CustomButtons