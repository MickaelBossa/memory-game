// Librairies
import React from 'react';
import styles from './Timer.module.css';

export default function Timer(props) {
  return (
    <>
      <h4 className={styles.title}>Temps</h4>
      <h1 className={styles.numbers}>00:00</h1>
    </>
  );
}
