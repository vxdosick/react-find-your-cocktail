import styles from "./UnsetButton.module.scss"
export default function UnsetButton(props) {
    return (
        <button onClick={props.onClick} className={styles.button}>{props.text}</button>
    )
}