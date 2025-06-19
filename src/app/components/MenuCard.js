import Button from './Button'
import Link from 'next/link'
import styles from "../page.module.css";

export default function MenuCard(props) {

    return (
        <article className={styles.dishCard}>
            <div className={styles.dishImgAndText}>
                <p className={styles.dishImage}>
                    {props.image}
                </p>
                <div>
                    <h3 className={styles.dishName}>
                        {props.dishName}
                    </h3>
                    <p>
                        {props.dishDescription}
                    </p>
                </div>
            </div>
            <div>
                <Link href="../preparation">
                    <Button text="commander" onClick={props.handleClick} />
                </Link>
            </div>
        </article>
    )
}