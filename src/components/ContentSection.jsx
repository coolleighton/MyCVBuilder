import styles from "../styles/ContentSection.css"

function ContentSection() {
    return (
        <>
            <div className="PersonalDetails">
                <h1>Personal Details</h1>
                <form>
                    <label htmlFor="Full-name">Full name</label>
                    <input id="Full-name" type="text" placeholder="Enter first and last name"></input>
                    <label htmlFor="Email">E-mail</label>
                    <input id="Email" type="e-mail" placeholder="Enter e-mail address"></input>
                    <label htmlFor="Phone">Phone number</label>
                    <input id="Phone" type="tel" placeholder="Enter your telephone number"></input>
                    <label htmlFor="Address">Full address</label>
                    <input id="Address" type="textArea" placeholder="Enter your home address"></input>
                </form>
            </div>

            <div className="EducationSection">

                <div className="EducationHeader">
                    <div>
                        <img src="./src/assets/education-img.png"></img>
                        <h1>Education</h1>
                    </div>
                    <img src="./src/assets/down-img.png"></img>
                </div>

                <button className="addEducation">
                    <img src="src/assets/plus-img.png"></img>
                    <p>Education</p>
                </button>
            </div>
        </>
        
    )
}

export default ContentSection