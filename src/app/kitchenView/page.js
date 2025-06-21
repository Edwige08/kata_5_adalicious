'use client'
import { useEffect, useState } from "react"
import Link from "next/link";
import Button from "../components/Button";

export default function KitchenView() {

    const [ordersList, setOrdersList] = useState();
    const readyStatus = "Prête !";
    const preparingStatus = "En préparation...";

    async function getOrders() {
        const response = await fetch('http://localhost:3010/orders');
        const data = await response.json();
        setOrdersList(data);
    }

    async function changeStatus(orderId, status) {
        const response = await fetch('http://localhost:3010/orders', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId: orderId, order_status: status })
        });
        const data = await response.json();
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
        deleteOrder(orderId)
    }

    const handleClickStatus = (orderId, status) => {
        changeStatus(orderId, status)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <>
            <div className="flex justify-end text-(--firstColor)">
                <Link
                    href="../"
                    className="pt-1 pr-2 pb-1 pl-2 m-2 rounded-md bg-(--fourthColor)">
                    <button>interface client</button>
                </Link>
            </div>
            <h3 className="m-4 text-center font-bold text-2xl">VUE CUISINE</h3>
            <div className="flex flex-col gap-5 items-center">
                {ordersList && ordersList.map((order, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center min-w-[300px] max-w-[500px]">
                            <div className='flex flex-col gap-2 border border-2 border-(--fourthColor) rounded-lg m-2 p-2 w-full'>
                                <div className="flex flex-row w-full">
                                    <p className="flex flex-col justify-start mr-2 p-3 size-fit border rounded-lg border-(--secondColor) bg-(--firstColor) text-4xl">
                                        {order.id}
                                    </p>
                                    <div>
                                        <h3 className="font-bold mb-2 text-lg">
                                            Commande de l'user à l'id n°{order.user_id}
                                        </h3>
                                        <p className="italic">
                                            1x plat à l'id n°{order.dish_id}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 justify-around w-full">
                                    <Button
                                        text="En préparation"
                                        classe="p-2 pl-4 pr-4 w-full rounded-lg bg-(--secondColor) font-bold text-(--firstColor) hover:translate-0.5"
                                        onClick={() => { handleClickStatus(order.id, preparingStatus) }}
                                    />
                                    <Button
                                        text="Prête !"
                                        classe="p-2 pl-4 pr-4 w-full rounded-lg bg-(--thirdColor) font-bold text-(--firstColor) hover:translate-0.5"
                                        onClick={() => { handleClickStatus(order.id, readyStatus) }}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <Button
                                    text="Annuler la commande"
                                    classe="p-2 pl-4 pr-4 w-full rounded-lg bg-red-500 font-bold text-(--firstColor) hover:translate-0.5"
                                    onClick={() => { handleClickDish(order.id) }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}