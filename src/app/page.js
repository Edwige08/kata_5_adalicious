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
      <Link href="./kitchenView">
        <button>interface cuisine</button>
      </Link>
      <div className={styles.mainContent}>
        <h1>
          <div>🥦</div>
          <div>Bienvenue sur Adalicious</div>
        </h1>
        <p>Pour commencer, peux-tu me donner ton prénom :</p>
        <form className={styles.inputNameDiv}>
          <input
            type="text"
            placeholder="Ton prénom"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className={styles.inputName}>
          </input>
          <Link href="./menu" >
            <Button type="submit" onClick={handleClick} text="valider" />
          </Link>
        </form>
      </div>
    </>
  );
}
