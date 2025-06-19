import styles from "../page.module.css";

export default function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className={styles.dishButton}>{props.text}</button>
    )
}