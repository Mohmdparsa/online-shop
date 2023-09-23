import styles from "./GAItems.module.css";
const GAItems = () => {
  return (
    <>
      <div className={styles.GAItemsContainer}>
        <div className={styles.GAItemsImg}>
          <img src="" alt="" />
        </div>
        <div >
            <h3 className={styles.GAItemsName}>hello</h3>
            <p className={styles.GAItemsDesc}>description:</p>
        </div>
        <div className={styles.GAItemsLine}></div>

        <div>
                 <button style={{marginLeft:"45px"}} className={styles.GAItemsBtn}>-</button>
        <span className={styles.GAItemsCount}>0</span>
        <button className={styles.GAItemsBtn}>+</button>
        <br />
        <br/>
        <br/>
        <span className={styles.GAItemsCost}>cost:<b>$</b></span>
        <br/>
        <button className={styles.GAItemsSubmitBtn}>Add to Shopping Cart</button>
        </div>

   


      </div>
    </>
  );
};

export default GAItems;
