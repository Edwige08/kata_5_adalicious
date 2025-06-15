'use client'
export default function Preparation() {
    const username = localStorage.getItem("username")
    const order = localStorage.getItem("order")
    console.log("order.image : " + order.image)
    console.log("order[0] : " + order[0])
    console.log("order : " + order)

    return (
        <>
            <p>Merci pour ta commande {username} !</p>
            <div>
                <p>Suivi :</p>
                <div>
                    <p>En préparation...</p>
                    <div>
                        {order.image}
                    </div>
                    <p>
                        {order.plate}
                    </p>
                </div>
            </div>
        </>
    )
}