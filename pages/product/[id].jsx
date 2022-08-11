import Image from "next/image";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useState } from "react";
const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev)=>[...prev , option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt="" objectFit="contain" src={pizza.img} layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price} </span>
        <p className={styles.desc}>{pizza.desc} </p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div onClick={() => handleSize(0)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span style={ size ===0 ? {  backgroundColor:"#d1411e" } : {}} className={styles.number}> Small </span>
          </div>
          <div onClick={() => handleSize(1)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span style={ size ===1 ? {  backgroundColor:"#d1411e" } : {}} className={styles.number}> Medium </span>
          </div>
          <div onClick={() => handleSize(2)} className={styles.size}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span      style={ size ===2 ? {  backgroundColor:"#d1411e" } : {}} className={styles.number}> Large </span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients </h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={option.text}
                name={option.text}
           
                onChange={(e) => handleChange(e, option)}
              />

              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
export default Product;
