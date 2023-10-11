import styles from "../styles/EducationSection.css"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

let educationArray = [

    {   school: "Cardiff City University",
        degree: "Automotive Engineering",
        startDate: "01/01/2020",
        endDate: "Present",
        location: "Cardiff, UK",
        key: uuidv4()
    },

    {   school: "New York University",
        degree: "Mechanical Engineering",
        startDate: "06/02/2025",
        endDate: "present",
        location: "New York, USA",
        key: uuidv4()
    },

]

function EducationSection() {

    const activeDisplay = "block"
    const inActiveDisplay = "none"
    const activeRotation = "rotate(180deg)"
    const inActiveRotation = "rotate(0deg)"

    const [EducationActive, setEducationActive] = useState(true)



    const handleHeaderClick = () => {
        if (EducationActive) {
            setEducationActive(false)
        }
        else {
            setEducationActive(true)
        }
    }

    return (
        <>
            <div className="EducationSection">

                <div 
                    onClick={handleHeaderClick}
                    className="EducationHeader">
                    <div className="HeaderTitle">
                        <img src="./src/assets/education-img.png"></img>
                        <h1>Education</h1>
                    </div>
                    <img 
                        style={{ transform : EducationActive ? activeRotation : inActiveRotation}}
                        className="DropDownImg" 
                        src="./src/assets/down-img.png"></img>
                </div>

                <ul 
                    style={{ display : EducationActive ? activeDisplay : inActiveDisplay }} 
                    className="UniversityList"
                > 

                    {educationArray.map((educationItem) => {

                        const active = "block"
                        const inActive = "none"

                        const [formActive, setFormActive] = useState(false)

                        const handleItemClick = () => {
                            if (formActive) {
                                setFormActive(false)
                            }
                            else {
                                setFormActive(true)
                            }
                        }

                        return (
                            <li key={educationItem.key}>

                                <hr className="Seperator"></hr>

                                <div
                                    className="UniversityListItem"
                                    onClick={handleItemClick}
                                    >
                                    <h2 className="UniversityListItemName">{educationItem.school}</h2>
                                    <img 
                                        className="UniversityListItemImg" 
                                        src = "src/assets/down-img.png"
                                        style={{ transform : formActive ? activeRotation : inActiveRotation}}
                                    ></img>
                                </div>

                                <div 
                                    style={{display : formActive ? active : inActive}}
                                    className="EducationForm"
                                >
                                    <form>
                                        <label htmlFor="School">School</label>
                                        <input value={educationItem.school} id="School" type="text" placeholder="Enter your school / university"></input>
                                        <label htmlFor="Degree">Degree</label>
                                        <input value={educationItem.degree} id="Degree" type="text" placeholder="Enter your degree"></input>
                                        <div className="educationDates">
                                            <div className="startDateDiv">
                                                <label htmlFor="StartDate">Start date</label>
                                                <input value={educationItem.startDate} id="StartDate" type="text" placeholder="Enter your start date"></input>
                                            </div>
                                            <div>
                                                <label htmlFor="EndDate">End date</label>
                                                <input value={educationItem.endDate}id="EndDate" type="text" placeholder="Enter your end date"></input>
                                            </div>
                                        </div>
                                        <label htmlFor="location">Location</label>
                                        <input value={educationItem.location} id="location" type="text" placeholder="Enter the school location"></input>
                                    </form>
                                </div>
                            </li>
                        )
                    })}

                    <hr className="Seperator"></hr>

                    <button className="addEducation">
                        <img src="src/assets/plus-img.png"></img>
                        <p>Education</p>
                    </button>
                </ul>
            </div>
        </>
    )
}

export default EducationSection