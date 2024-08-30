import styles from "./Register.module.css";

const Register = () => {
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
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className={styles.button}>REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
