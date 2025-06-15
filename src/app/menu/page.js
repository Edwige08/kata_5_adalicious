'use client'
import { useEffect, useState } from "react"
import MenuCard from "../components/MenuCard"

export default function Menu() {
    const username = localStorage.getItem("username")

    const [dishes, setDishes] = useState([])

    async function fetchDishes() {
        const promise = await fetch('http://localhost:3010/dishes');
        const response = await promise.json();
        setDishes(response);
    }

    useEffect(() => {
        fetchDishes()
    }, [])

    return (
        <>
            <p>Bonjour {username} !</p>
            <div>
                {dishes && dishes.map((dish, index) => {

                    return (
                        <MenuCard
                            key={index}
                            image={dish.image}
                            dishName={dish.plate}
                            dishDescription={dish.description}
                            handleClick={() => localStorage.setItem("order", dish)}
                        />
                    )
                })}
            </div>
        </>
    )
}