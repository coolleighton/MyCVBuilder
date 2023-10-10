import './App.css'
import CustomButtons from './components/CustomButtons'
import RenderSaveLoadClearButtons from "./components/SaveLoadClearButtons.jsx"

function App() {

  return (
    <div className='mainDiv'>
      <CustomButtons></CustomButtons>
      <div>
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
      </div>
    </div>

  )
}

export default App
