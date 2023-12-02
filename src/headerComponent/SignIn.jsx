import styles from "./SignIn.module.css";
const SignIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formImage}></div>
      <div className={styles.mainForm}>
        <div className={styles.mainFormSubset}>
          <table className={styles.formTable}>
            <tr>
              <label className={styles.inputLabel}>FirstName:</label>
              <input
                type="text"
                name="firstName"
                className={`${styles.formInputs} , ${styles.formFirstName} `}
                placeholder="first name"
              />
            </tr>

            <tr>
              <label className={styles.inputLabel}>SecondName:</label>
              <input
                type="text"
                name="secondName"
                className={`${styles.formInputs} , ${styles.formSecondName} `}
                placeholder="second name"
              />
            </tr>
            <tr>
              <label className={styles.inputLabel}>Phone:</label>
              <input
                type="text"
                name="phone"
                className={`${styles.formInputs} , ${styles.formPhone} `}
                placeholder="phone number"
              />
            </tr>
            <tr>
              <label className={styles.inputLabel}>Email:</label>
              <input
                type="text"
                name="email"
                className={`${styles.formInputs} , ${styles.formEmail} `}
                placeholder="email@email.com"
              />
            </tr>
            <tr>
              <label className={styles.inputLabel}>Password:</label>
              <input
                type="text"
                name="password"
                className={`${styles.formInputs} , ${styles.formPassword} `}
                placeholder="password"
              />
            </tr>
            <tr>
              <label className={styles.inputLabel}>Re-Type-Password:</label>
              <input
                type="text"
                name="re-type-password"
                className={`${styles.formInputs} , ${styles.formReTypePassword} `}
                placeholder="re-type-password"
              />
            </tr>
            <tr>
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.submitBtn}>Submit</button>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
