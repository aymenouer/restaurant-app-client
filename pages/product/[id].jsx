import Image from "next/image";
import styles from "../../styles/Product.module.css";
import axios from 'axios'
import { useState } from "react";
const Product = ({pizza}) => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt="" objectFit="contain" src={pizza.img} layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[size]} </span>
        <p className={styles.desc}>{pizza.desc} </p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div onClick={() => setSize(0)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}> Small </span>
          </div>
          <div onClick={() => setSize(1)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}> Medium </span>
          </div>
          <div onClick={() => setSize(2)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}> Large </span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients </h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="double"
              name="double"
            />

            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />

            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />

            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props:{
      pizza:res.data,
    },
  };

};
export default Product;
