import styles from "../page.module.css";

export default function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className={props.classe}>{props.text}</button>
    )
}