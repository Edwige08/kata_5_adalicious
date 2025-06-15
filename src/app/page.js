'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [userName, setUserName] = useState("")
  const handleClick = () => {
    window.localStorage.setItem("username", userName)
  }
  return (
    <>
      <div>interface cuisine</div>
      <div className={styles.mainContent}>
        <h1>
          <div>🥦</div>
          <div>Bienvenue sur Adalicious</div>
        </h1>
        <p>Pour commencer, peux-tu me donner ton prénom :</p>
        <form>
          <input
            type="text"
            placeholder="Ton prénom"
            value={userName}
            onChange={e => setUserName(e.target.value)}>
          </input>
          <Link href="/menu" >
            <Button type="submit" onClick={handleClick} text="valider" />
          </Link>
        </form>
      </div>
    </>
  );
}
