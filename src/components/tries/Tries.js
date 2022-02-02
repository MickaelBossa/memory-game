// Librairies
import React from 'react';
import styles from './Tries.module.css';

export default function Tries(props) {
  return (
    <>
      <h4 className={styles.title}>Nombres de coups</h4>
      <h1 className={styles.number}>{props.data}</h1>
    </>
  );
}
