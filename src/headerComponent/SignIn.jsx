import styles from "./SignIn.module.css";
const SignIn = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <h2 className={styles.registerTitle}> Registeration</h2>
        <hr />
        <br />
        <div className={styles.total}>
          <label for="">First name:</label>
          <br />
          <input
            className={styles.input}
            type="text"
            name="First-Name"
            placeholder="Firstname"
          ></input>
          <br />
          <br />
          <label for="">Last name:</label>
          <br />
          <input
            className={styles.input}
            type="text"
            name="Last-Name"
            placeholder="Lastname"
          ></input>
          <br />
          <br />
          <label for="">Phone:</label>
          <br />
          <input
            className={styles.phone}
            type="text"
            name="phone"
            placeholder="09xxxxxxxxx"
          ></input>
          <br />
          <br />
          <label for="">Email:</label>
          <br />
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
          ></input>
          <br />
          <br />
          <label for="">Password</label>
          <br />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <br />
          <label for="">Re-type-Password</label>
          <br />
          <input
            className={styles.input}
            type="password"
            placeholder="Re-type-Password"
          ></input>
          <br />
          <br />
          <button className={styles.registerBtn} type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
