import React from "react"
import UnsetButton from "../UnsetButton/UnsetButton"
import styles from "./TextInput.module.scss"
export default function TextInput(props) {

    return (
        <div className={styles.input}>
            <input onChange={props.onChange} value = {props.value} className={styles.input} type="text" placeholder={props.placeholder} />
            {props.value ? <UnsetButton onClick={props.onClick} text="&#x2716;" /> : null}
        </div>
    )
}