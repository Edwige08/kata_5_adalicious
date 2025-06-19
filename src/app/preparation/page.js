'use client'
import styles from "../page.module.css";

export default function Preparation() {
    const username = localStorage.getItem("username")
    const dishName = localStorage.getItem("dishName")
    const dishImage = localStorage.getItem("dishImage")

    return (
        <>
            <p className={styles.helloUser}>Merci pour ta commande {username} !</p>
            <div>
                <p>Suivi :</p>
                <div className={styles.dishCard}>
                    <p>En préparation :</p>
                    <div className={styles.dishImage}>
                        {dishImage}
                    </div>
                    <p>
                        1 x {dishName}
                    </p>
                </div>
            </div>
        </>
    )
}