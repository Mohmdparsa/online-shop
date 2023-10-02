import styles from "./GAItems.module.css";
import { useState } from "react";
const GAItems = ({ GAItems }) => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className={styles.GAItemsContainer}>
        <div className={styles.GAItemsImg}>
          <img src={GAItems.photo} alt="" />
        </div>
        <div className={styles.GAItemsDescription}>
          <h3 className={styles.GAItemsName}>{GAItems.name}</h3>
          <p className={styles.GAItemsDesc}>{GAItems.desc}</p>
        </div>
        <div className={styles.GAItemsLine}></div>

        <div> 
          <br />
          <br />
           <span className={styles.GAItemsCost}>
            cost:<b>{GAItems.cost}</b>
          </span>
          <br />
          <br />
          <button
            onClick={decrease}
            style={{ marginLeft: "45px" }}
            className={styles.GAItemsBtn}
            >
            -
          </button>
          <span className={styles.GAItemsCount}>{count}</span>
          <button onClick={Increase} className={styles.GAItemsBtn}>
            +
          </button>
          <br />
          <br />
        
          <button className={styles.GAItemsSubmitBtn}>
            Add to Shopping Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default GAItems;
