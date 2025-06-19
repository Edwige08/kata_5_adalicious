import Button from './Button'
import styles from "../page.module.css";

export default function OrderCard(props) {

    return (
        <>
            <article className={styles.dishCard}>
                <div className={styles.dishImgAndText}>
                    <p className={styles.dishImage}>
                        {props.image}
                    </p>
                    <div>
                        <h3 className={styles.dishName}>
                            Commande de {props.userName}
                        </h3>
                        <p>
                            1x {props.dishName}
                        </p>
                    </div>
                </div>
                <div>
                    <Button text="en préparation" onClick={props.handleClickPrepare} />
                    <Button text="prête !" onClick={props.handleClickReady} />
                </div>
            </article>
            <div>
                <Button text="annuler la commande" onClick={props.handleClickCancel} />
            </div>
        </>
    )
}