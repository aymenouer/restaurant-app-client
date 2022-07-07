import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="bg" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAYMEN PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Germany
            <br /> Hambourg
            <br /> Scheld
          </p>
          <p className={styles.text}>
            Tunis
            <br /> Ariana
            <br /> Petit Ariana
          </p>
          <p className={styles.text}>
            Tunis
            <br /> Kef
            <br /> Hay dir
          </p>
          
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}> WORKING HOURS</h1>
         
        <p className={styles.text}>
            MONDAY UNTILL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
