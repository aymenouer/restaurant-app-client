import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

function Featured() {
  const [index,setIndex] =useState(0);
  const [images] = useState([
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ]);
  const handleArrow = (direction) =>{
    if (direction === "l"){
      setIndex(index !== 0 ? index-1: 2)
    }
    if (direction === "r"){
      setIndex(index !== 0 ? index+1: 0)
    }
  }
  return (
    <div className={styles.container}>
      <div style={{ left: 0 }} className={styles.arrowContainer} onClick={()=>handleArrow("l")} >
        <Image src="/img/arrowl.png" layout="fill" alt="arrowl" />
      </div>
      <div className={styles.wrapper}>
          {images.map((img, index) => (
        <div  key={index}  className={styles.imgContainer}>
            <Image src={img} layout="fill" objectFit="contain" alt="featured" />
        </div>
          ))}
      </div>
      <div style={{ right: 0 }} className={styles.arrowContainer} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="arrowr" />
      </div>
    </div>
  );
}

export default Featured;
