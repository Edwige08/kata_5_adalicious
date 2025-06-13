import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <div>interface cuisine</div>
      <div className="main-content">
        <h1>
          <div>🥦</div>
          <div>Bienvenue sur Adalicious</div>
        </h1>
        <p>Pour commencer, peux-tu me donner ton prénom :</p>
        <input></input>
        <Button text="valider" />
      </div>
    </>
  );
}
