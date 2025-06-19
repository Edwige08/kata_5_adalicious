'use client'
import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "../page.module.css";
import Button from "../components/Button";

export default function KitchenView() {

    const [ordersList, setOrdersList] = useState();

    async function getOrders() {
        const response = await fetch('http://localhost:3010/orders');
        const data = await response.json();
        setOrdersList(data);
    }

    async function deleteOrder(orderId) {
        const response = await fetch('http://localhost:3010/orders', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId: orderId })
        })
        if (response.ok) {
            await getOrders();
        }
    }

    const handleClickDish = (orderId) => {
        console.log("DELETE ORDER")
        deleteOrder(orderId)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <>
            <Link href="../">
                <button>interface client</button>
            </Link>
            <h3>VUE CUISINE</h3>
            <div>
                {ordersList && ordersList.map((order, index) => {
                    console.log("🍔", order.order_status)
                    return (
                        <div key={index}>
                            <div className={styles.dishCard}>
                                <div className={styles.dishImgAndText}>
                                    <p className={styles.dishImage}>
                                        {order.id}
                                    </p>
                                    <div>
                                        <h3 className={styles.dishName}>
                                            Commande de l'user à l'id n°{order.user_id}
                                        </h3>
                                        <p>
                                            1x plat à l'id n°{order.dish_id}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.dishImgAndText}>
                                    <Button
                                        text="En préparation"
                                        classe={styles.prepareButton}
                                    />
                                    <Button
                                        text="Prête !"
                                        classe={styles.readyButton}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    text="Annuler la commande"
                                    classe={styles.deleteButton}
                                    onClick={() => {handleClickDish(order.id)}}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}