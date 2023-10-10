import './App.css'
import CustomButtons from './components/CustomButtons'
import RenderSaveLoadClearButtons from "./components/SaveLoadClearButtons.jsx"
import ContentSection from './components/ContentSection'

function App() {

  return (
    <div className='mainDiv'>
      <CustomButtons></CustomButtons>
      <div>
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <ContentSection></ContentSection>
      </div>
    </div>

  )
}

export default App
