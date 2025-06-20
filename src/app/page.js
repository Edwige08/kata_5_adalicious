'use client'
import styles from "./page.module.css";
import Button from "./components/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [userName, setUserName] = useState("")

  const addUser = async (username) => {
    const response = await fetch('http://localhost:3010/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username })
    })
    const data = await response.json()
    console.log("🍓 data : " + data)
    window.localStorage.setItem("userId", data)
  }

  const handleClick = () => {

    if (!userName.trim()) {
      alert(`Veuillez entrer un prénom s'il vous plaît`)
      return
    }

    addUser(userName)
    window.localStorage.setItem("username", userName)
  }

  return (
    <>
      <div className="flex justify-end text-(--firstColor)">
        <Link href="./kitchenView" className="pt-1 pr-2 pb-1 pl-2 m-2 rounded-md bg-(--fourthColor) hover:translate-0.25 hover:ease-in-out hover:duration-[0.2s]">
          interface cuisine
        </Link>
      </div>
      <div>
        <h2 className="flex flex-col items-center m-2 mb-10 text-2xl font-bold">
          <div>🥦</div>
          <div>Bienvenue sur Adalicious !</div>
        </h2>
        <p className="m-2 text-center">
          Pour commencer, quel est ton prénom ?
          </p>
        <form className="flex flex-col justify-center items-center gap-2 m-auto p-3 w-fit rounded-md border-1 border-(--fourthColor) bg-(--thirdColor)">
          <input
            type="text"
            placeholder="Ton prénom"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="p-2 rounded-md border-1 border-(--fourthColor) text-center bg-(--firstColor)">
          </input>
          <Link href="./menu" className="border border-(--fourthColor) p-2 w-[80%] text-center font-bold rounded-sm bg-(--secondColor) shadow-xs hover:translate-0.25 hover:ease-in-out hover:duration-[0.2s]">
            <Button
              type="submit"
              onClick={handleClick}
              text="Valider" />
          </Link>
        </form>
      </div>
    </>
  );
}
