import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" height="500" width="500" alt="" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sint
        eveniet tenetur aperiam labore ea, optio earum voluptate cumque quos
        commodi? Nostrum tenetur ipsa vitae iste neque officia voluptate sit.
      </p>
    </div>
  );
}

export default PizzaCard;
