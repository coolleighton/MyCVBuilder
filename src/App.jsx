import './App.css'
import CustomButtons from './components/CustomButtons'
import RenderSaveLoadClearButtons from "./components/SaveLoadClearButtons.jsx"
import ContentSection from './components/ContentSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'

function App() {

  return (
    <div className='mainDiv'>
      <CustomButtons></CustomButtons>
      <div>
        <RenderSaveLoadClearButtons></RenderSaveLoadClearButtons>
        <ContentSection></ContentSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </div>
  )
}

export default App
