'use client'
import { useEffect, useState } from "react"
import Link from "next/link";
import styles from "../page.module.css";

export default function KitchenView() {

    const [ordersList, setOrdersList] = useState();

    async function getOrders() {
        const response = await fetch('http://localhost:3010/orders');
        const data = await response.json();
        setOrdersList(data);
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

                    <div key={index}>
                        <div>
                            <p className={styles.dishImage}>
                                { order.id }
                            </p>
                            <div>
                                <h3 className={styles.dishName}>
                                    Commande de { order.user_id }
                                </h3>
                                <p>
                                    1x { order.dish_id }
                                </p>
                            </div>
                        </div>
                        <button>en préparation</button>
                        <button>prête !</button>
                    </div>
                })}
            </div>
        </>
    )
}