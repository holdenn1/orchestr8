import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Greeting() {

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Welcome to Orchestr8! </h3>
        <p className={styles.description}>Your project management assistant</p>
        <Link
        to='sign-up'
          className={styles.greetingLink}
        >
          Start planning
        </Link>
      </div>
    </div>
  );
}

export default Greeting;
