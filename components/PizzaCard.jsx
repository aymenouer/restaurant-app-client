import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";
function PizzaCard({pizza}) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
      <Image src={pizza.img} height="500" width="500" alt="" />
      
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.prices[0]} DT</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  );
}

export default PizzaCard;
