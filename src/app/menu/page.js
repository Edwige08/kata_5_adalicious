'use client'
import { useEffect, useState } from "react"
import MenuCard from "../components/MenuCard"
import styles from "../page.module.css";

export default function Menu() {
    const username = localStorage.getItem("username")
    const userId = parseInt(localStorage.getItem("userId"))

    const [dishes, setDishes] = useState();

    async function fetchDishes() {
        const response = await fetch('http://localhost:3010/dishes');
        const data = await response.json();
        setDishes(data);
    }

    async function postOrder(dishId) {
        const response = await fetch('http://localhost:3010/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userId, dishId: dishId })
        })
    }

    const handleClickDish = (dish) => {
        localStorage.setItem("dishName", dish.dish_name);
        localStorage.setItem("dishImage", dish.image);
        console.log("dish.image : " + dish.image);
        postOrder(dish.id)
    }

    useEffect(() => {
        fetchDishes()
    }, [])



    return (
        <>
            <p className="mt-5 mb-3 text-2xl font-bold text-center">Bonjour {username} !</p>
            <div className="flex flex-col items-center">
                {dishes && dishes.map((dish, index) => {

                    return (
                        <MenuCard
                            key={dish.id || index}
                            image={dish.image}
                            dishName={dish.dish_name}
                            dishDescription={dish.description}
                            handleClick={() => {handleClickDish(dish)}}
                        />
                    )
                })}
            </div>
        </>
    )
}