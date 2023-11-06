import styles from "../styles/deleteBtn.css";
import deleteImg1 from "../assets/delete-img.png";
import deleteImg2 from "../assets/delete-dark-img.png";
import { useState } from "react";



function DeleteBtn({index, handleDelete, section}) {

  const [buttonActive, setButtonActive] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setButtonActive(true)}
        onMouseLeave={() => setButtonActive(false)}
        className="deleteBtn"
        onClick={() => handleDelete(index, section)}
      >
        <img src={buttonActive ? deleteImg2 : deleteImg1}></img>
        <p >Delete</p>
      </button>
    </>
  );
}

export default DeleteBtn;
