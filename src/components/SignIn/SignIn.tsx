import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className={styles.button}>SIGN IN</button>
      </form>
    </div>
  );
};

export default SignIn;
