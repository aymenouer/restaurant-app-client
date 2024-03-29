import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch,useSelector } from 'react-redux';

import { useEffect,useState } from "react";
const Cart = () => {
  const [open,setOpen] = useState(false);
  const amount = "2";

  const style = { layout: "vertical" };
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);



  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.products.map((product => (
            <tr key={product._id} className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={product.img}
                    objectFit="cover"
                    layout="fill"
                    alt="pizza"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{product.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                 {product.extras.map((extra => (
<span key={extra._id} > {extra.text} , </span>

                 ))) }
                </span>
              </td>
              <td>
                <span className={styles.price}>{product.price} DT</span>
              </td>
              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>{product.price * product.quantity}</span>
              </td>
            </tr>
            )))}
        
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>{cart.total} DT
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0.00 DT
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{cart.total} DT
          </div>
          {
            open ? (
              <div className={styles.paymentMethods} >
                <button className={styles.payButton} > Cash ON DELIVERY </button>
             
                  </div>

            ) : (

              <button onClick={()=>setOpen(true)} className={styles.button} >CHECKOUT NOW!</button>

            )
          }
       
        </div>
      </div>
    </div>
  );
};

export default Cart;
