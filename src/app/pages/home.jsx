import styles from '../css/home.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Welkom op mijn portfolio</h1>
        <p>Dit is een beschrijving van mijn portfolio.</p>
      </div>
      <div className={styles.right}>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
      </div>
    </div>
  );
}