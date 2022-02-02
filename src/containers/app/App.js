// Librairies
import React, { useState } from 'react';
import styles from './App.module.css';

// Composants
import Timer from '../../components/timer/Timer';
import Tries from '../../components/tries/Tries';
import Cards from '../cards/Cards';

function App() {
  // States
  const [dataTries, setDataTries] = useState();

  // Récuperer les essais
  const pullData = (data) => {
    setDataTries(data);
  };

  // Réinitialiser le jeu
  const reInitializeGame = () => {
    console.log('test');
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.Timer}>
          <Timer />
        </div>
        <div className={styles.Tries}>
          <Tries data={dataTries} />
        </div>
      </div>
      <h5 className={styles.titleInstruction}>
        Cliquer sur une carte pour commencer
      </h5>
      <Cards data={pullData} />
      <div className={styles.btn} onClick={reInitializeGame}>
        <p className={styles.btnText}>Réinitialiser</p>
      </div>
    </div>
  );
}

export default App;
