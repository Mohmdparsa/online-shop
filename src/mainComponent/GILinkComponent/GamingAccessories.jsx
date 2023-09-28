import styles from "./GamingAccessories.module.css";
import FirstNavbar from "../../headerComponent/firstNavbar";
import SecondNavbar from "../../headerComponent/SecondNavbar";
import GAItems from "./GamingAccessoriesItemsComponent/GAItems"
import { useState } from "react";
import NoGoodsAvailable from "./NoGoodsAvailable";

const GamingAccessories = (getGAGoods) => {

  const [loading , setLoading] = useState(false)
  {console.log("this is getGAGoods",getGAGoods)}
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
        {
          getGAGoods.length> 0 ? 
          getGAGoods.map(g =>(
            <GAItems key={g.id} GAItems={g} loading={loading}/>
          )): <div>
           <NoGoodsAvailable/>

          </div>

        }
       
      </section>
      </div>
  
  
    </>
  );
};

export default GamingAccessories;
