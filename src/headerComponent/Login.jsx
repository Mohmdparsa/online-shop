import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div>
      <div className={styles.loginContainer}>
        <table className={styles.loginTable}>
          <tr>
            <h2 className={styles.loginTitle}>Login</h2>
          </tr>

          <tr>
            <input
              className={styles.loginInput}
              type="text"
              placeholder="User name"
            />
          </tr>
          <br />

          <tr>
            <input
              className={styles.loginInput}
              type="text"
              placeholder="Pasword"
            />
          </tr>
          <br />
          <tr>
            <span className={styles.loginForgotPassword}>Forgot password?</span>
          </tr>
          <tr>
            <button className={styles.loginSubmit}>Login</button>
          </tr>
          <tr>
            <p style={{ marginLeft: "70px" }}>
              {" "}
              dont have an account?
              <NavLink
                to="/signIn"
                style={({ isActive }) => {
                  return { color: isActive ? "red" : "" };
                }}
              >
                SignIn
              </NavLink>
            </p>
          </tr>
          <fieldset className={styles.loginFieldset}>
            <legend>Or</legend>
            <div className={styles.LoginGoogleLogin}><img className={styles.LoginGoogleImg} src={require("../assets/GoogleLogo/googleLogo.jpg")} alt="" /> Login with Google</div>
          </fieldset>
        </table>
      </div>
    </div>
  );
};

export default Login;
