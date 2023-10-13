import styles from "../styles/CVPreview.css"

function CVPreview({personalInfo}) {

    return (
        <>
            <div className="CVPreview">
                <h1>{personalInfo.fullName}</h1>
                <h1>{personalInfo.email}</h1>
                <h1>{personalInfo.phoneNumber}</h1>
                <h1>{personalInfo.homeAddress}</h1>
                <h1>{personalInfo.personalDescription}</h1>
            </div>
        </>
    )

}

export default CVPreview