import styles from "../../styles/Admin.module.css";
import Image from 'next/image'
const index = () => {
  return (
    <div className={styles.container} >
      <div className={styles.item} >
        <h1 className={styles.title} >Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr  className={styles.tr}>
              <td>
                
                  <Image
                    src="/img/pizza.png"
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt="pizza"
                  />
             
              </td>
              <td>
                ID
               </td>
              <td>
                Title
               </td>
              <td>
                50 
               </td>
              <td>
                <button className={styles.button} >Edit</button>
                <button className={styles.button} >Delete</button>
               </td>
             
           

            </tr>
          

        
          </tbody>
        </table>
      </div>
      <div className={styles.item} >

      </div>


    </div>
  )
}

export default index