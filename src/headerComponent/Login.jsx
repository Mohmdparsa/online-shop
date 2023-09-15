import styles from "./Login.module.css"
const Login = () => {
  return (
    <div>
      <div className={styles.loginContainer}>
        <table className={styles.loginTable}>
          <tr>
            <td>User Name</td>
          </tr>
          <tr>
            <input
            className={styles.loginInput}
              type="text"
              placeholder="User name"
            />
          </tr>
          <tr>
            <caption>Pasword</caption>
          </tr>
          <tr>
        <input className={styles.loginInput} type="text" placeholder="Pasword" />
          </tr>
          <br />
          <tr>
            <button className={styles.loginSubmit}>Sumbit</button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Login;
