import styles from "../styles/deleteBtn.css";
import { useState } from "react";

function DeleteBtn() {
    return (
        <>
            <button>
                <img src="./src/assets/delete-img.png">
                </img>
                <p>Delete</p>
            </button>
        </>
    )
}

export default DeleteBtn;