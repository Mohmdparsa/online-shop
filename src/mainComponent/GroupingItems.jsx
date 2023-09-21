import styles from "./GroupingItems.module.css";
import { NavLink } from "react-router-dom";

const GroupingItems = () => {
  return (
    <div>
      <NavLink
        to="/GamingAccessories"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Gaming accessories</h2>
          <img className={styles.itemsImg} src="" alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
      <NavLink
        to="/Electronics"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Electronics</h2>
          <img className={styles.itemsImg} src="" alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>

      <NavLink
        to="/HomeAndKitchen"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Home & Kitchen</h2>
          <img className={styles.itemsImg} src="" alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>

      <NavLink
      to="/HealthAndPersonalCare"
      style={({ isActive }) => {
        return { color: isActive ? "red" : "" };
      }}>
      <div className={styles.items}>
        <h2 className={styles.title}>Health & Personal Care</h2>
        <img className={styles.itemsImg} src="" alt="" />
        <br />
        <br />
        <span className={styles.shopNow}>Shop Now</span>
      </div>
      
      </NavLink>

      <NavLink

      to="/ForYourFitnessNeeds"
      style={({ isActive }) => {
        return { color: isActive ? "red" : "" };
      }}>
           <div className={styles.items}>
        <h2 className={styles.title}>For your Fitness Needs</h2>
        <img className={styles.itemsImg} src="" alt="" />
        <br />
        <br />
        <span className={styles.shopNow}>Shop Now</span>
      </div>
      </NavLink>
      <NavLink

to="/FindYourIdealTV"
style={({ isActive }) => {
  return { color: isActive ? "red" : "" };
}}>
     <div className={styles.items}>
  <h2 className={styles.title}>Find Your Ideal TV</h2>
  <img className={styles.itemsImg} src="" alt="" />
  <br />
  <br />
  <span className={styles.shopNow}>Shop Now</span>
</div>
</NavLink>


   
    </div>
  );
};

export default GroupingItems;
