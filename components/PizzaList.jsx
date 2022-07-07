import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';
function PizzaList() {
  return (
    <div className={styles.container} >
        <h1 className={styles.title}>
            THE BEST PIZZA IN TOWN
        </h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus eum provident quisquam in, odio ullam eveniet saepe iste quia accusamus ipsum laudantium inventore neque, possimus sunt animi recusandae natus.
        </p>
        <div className={styles.wrapper}>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>

        </div>
    </div>
  )
}

export default PizzaList