import styles from "./SecondNavbar.module.css"
const SecondNavbar = () => {
  return (
    <div>
      <div className={styles.secondNavbar}>
        <table className={styles.secondNavTable}>
          <ul>
            <li className={styles.secondNavbarDiv}>
              <tr>
                <td>
                  <li className={` fa fa-bars  ${styles.nav2Bars}`}></li>
                </td>
                <span className={styles.cogLink}>Classification Of Goods</span>
                
              </tr>
            </li>

            <li className={`${styles.secondNavbarDiv} ${styles.secondNavbarItems}`}>
              <tr>
                <td>
                  {" "}
                  <li className={`fa fa-gift ${styles.nav2Icon}`}></li>
                </td>
                <span>Gift Card</span>
              </tr>
            </li>
            <li className={`${styles.secondNavbarDiv} ${styles.secondNavbarItems}`}>
              <tr>
                <td>
                  {" "}
                  <li className={`fa fa-fire ${styles.nav2Icon}`}></li>
                </td>
                <span>Best Sellers</span>
              </tr>
            </li>
            <li className={`${styles.secondNavbarDiv} ${styles.secondNavbarItems}`}>
              <tr>
                <td>
                  {" "}
                  <li className={`fa fa-percent ${styles.nav2Icon}`}></li>
                </td>
                <span> Discount & Offers</span>
              </tr>
            </li>
          </ul>
        </table>
      </div>
    </div>
  );
};

export default SecondNavbar;
