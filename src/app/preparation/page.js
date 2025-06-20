'use client'
import styles from "../page.module.css";

export default function Preparation() {
    const username = localStorage.getItem("username")
    const dishName = localStorage.getItem("dishName")
    const dishImage = localStorage.getItem("dishImage")

    return (
        <>
            <p className="mt-5 mb-3 text-2xl font-bold text-center">Merci pour ta commande {username} !</p>
            <div className="flex flex-col items-center">
                <p>Suivi :</p>
                <div className="flex flex-col items-center gap-4 p-2 border border-2 border-(--fourthColor) rounded-lg m-2 p-2 w-[90%] max-w-[500px]">
                    <p>En préparation :</p>
                    <div className="flex flex-col justify-start mr-2 p-3 size-fit border rounded-lg border-(--secondColor) bg-(--firstColor) text-4xl">
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