import styles from "./firstNavbar.module.css";
import { NavLink } from "react-router-dom";

const FirstNavbar = () => {
  return (
    <div>
      <div className={styles.header}>
        <table className={styles.headerTable}>
          <tr>
            <td>
              <h1 className={styles.title}>YourShop</h1>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.searchContainer}>
                <div>
                  <li className={`fa fa-search  ${styles.searchIcon} `}></li>
                </div>
                <div>
                  <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="search"
                  ></input>
                </div>
              </div>
            </td>
          </tr>
          <div className={styles.loginDiv}>
            <tr>
              <td>
                <li className="fa fa-sign-in"></li>
              </td>
            </tr>
            <span>
              <NavLink
                to="/Login"
                style={({ isActive }) => {
                  return { color: isActive ? "red" : "" };
                }}
              >
                Login
              </NavLink>{" "}
              |
              <NavLink
                to="/SignIn"
                style={({ isActive }) => {
                  return { color: isActive ? "red" : "" };
                }}
              >
                Sign in
              </NavLink>{" "}
            </span>
          </div>
          <div className={styles.line}></div>
          <li className={`fa fa-shopping-cart  ${styles.shoppingCart}`}></li>
        </table>
      </div>
    </div>
  );
};

export default FirstNavbar;
