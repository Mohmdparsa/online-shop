import styles from "./GamingAccessories.module.css";
import FirstNavbar from "../../headerComponent/firstNavbar";
import SecondNavbar from "../../headerComponent/SecondNavbar";
import GAItems from "./GamingAccessoriesItemsComponent/GAItems"
import { useState , useEffect } from "react";
import NoGoodsAvailable from "./NoGoodsAvailable";
import Spinner from "../Spinner";
import {GAGoods , GAGroups} from "../../services/GAServices"

const GamingAccessories = () => {
  const [getGAGood , setGAGood] = useState([])
  const [loading , setLoading] = useState(false)
  const [getGAGoods , setGAGoods ] = useState([])
  const [getGAGroups , setGAGroups] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true)
        const {data : GAGoodsData} = await GAGoods()
        const {data : GAGroupsData} = await GAGroups()
        setGAGoods(GAGoodsData)
        setGAGroups(GAGroupsData) 
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)

      }

    } 
    fetchData();
  } , [])

 
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
        {  loading? 
        (<Spinner/> ): 

          (
          getGAGoods.length> 0 ? 
          getGAGoods.map(g =>(
            <GAItems key={g.id} GAItems={g} loading={loading}/>
          )): <div>
           <NoGoodsAvailable/>

          </div>

          )
        }
        </section>
      </div>
  
  
    </>
  );
};

export default GamingAccessories;
