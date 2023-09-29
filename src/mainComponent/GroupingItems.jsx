import styles from "./GroupingItems.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const GroupingItems = () => {
  const [getGAGoods , setGetGAGoods] = useState([])
  return (
    <div>
      <NavLink
        to="/GamingAccessories"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        getGAGoods={getGAGoods}

      >
        <div className={styles.items}>
          <h2 className={styles.title}>Gaming accessories</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/gaming-accessories.jpg")} alt="" />
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
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Electronics.jpg")} alt="" />
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
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Home&Kitchen.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>

      <NavLink
        to="/HealthAndPersonalCare"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Health & Personal Care</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Health&PersonalCare.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>

      <NavLink
        to="/ForYourFitnessNeeds"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>For your Fitness Needs</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/ForYourFitnessNeeds.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
      <NavLink
        to="/FindYourIdealTV"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Find Your Ideal TV</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/TV.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
      <NavLink
        to="/ShopLaptopsAndTablets"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Shop Laptops & Tablets</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Laptop&Tablet.jpeg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
      <NavLink
        to="/Smartwatches"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Smart watches</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Watches.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
      <NavLink
        to="/Toys"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        <div className={styles.items}>
          <h2 className={styles.title}>Toys</h2>
          <img className={styles.itemsImg} src={require("../assets/GroupingItemsImage/Toys.jpg")} alt="" />
          <br />
          <br />
          <span className={styles.shopNow}>Shop Now</span>
        </div>
      </NavLink>
    </div>
  );
};

export default GroupingItems;
