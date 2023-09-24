import styles from "./GAItems.module.css";
import { useState } from "react";
import Spinner from "../../Spinner";
const GAItems = ({loading}) => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if(count>0){
      setCount(count - 1);  
    }
    
  };

  return (
    <>
    {
      loading? <Spinner/> : (
           <div className={styles.GAItemsContainer}>
        <div className={styles.GAItemsImg}>
          <img src="" alt="" />
        </div>
        <div>
          <h3 className={styles.GAItemsName}>hello</h3>
          <p className={styles.GAItemsDesc}>description:</p>
        </div>
        <div className={styles.GAItemsLine}></div>

        <div>
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
          <br />
          <span className={styles.GAItemsCost}>
            cost:<b>$</b>
          </span>
          <br />
          <button className={styles.GAItemsSubmitBtn}>
            Add to Shopping Cart
          </button>
        </div>
      </div>
      )
    }
   
    </>
  );
};

export default GAItems;
