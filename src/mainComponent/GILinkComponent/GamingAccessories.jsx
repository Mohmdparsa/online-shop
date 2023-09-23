import styles from "./GamingAccessories.module.css";
import FirstNavbar from "../../headerComponent/firstNavbar";
import SecondNavbar from "../../headerComponent/SecondNavbar";
import GAItems from "./GamingAccessoriesItemsComponent/GAItems"

const GamingAccessories = () => {
  return (
    <>
      <header>
        <FirstNavbar />
        <br />
        <SecondNavbar />
        <div className={styles.GANavbar}>
          {" "}
          <h2 className={styles.GATitle}>Gaming Accessories</h2>
        </div>
      </header>
      {/* sidebar */}
      <div className={styles.GAContainer}>
            <section>
           <div className={styles.GASidebar}>
        <input type="text" className={styles.GASearch} placeholder="search" />
    
      </div> 
      </section>
      <section>
        <GAItems/>

      
      </section>
      </div>
  
  
    </>
  );
};

export default GamingAccessories;
