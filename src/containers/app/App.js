// Librairies
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

// Composants
import Timer from '../../components/timer/Timer';
import Tries from '../../components/tries/Tries';
import SingleCard from '../../components/singleCard/SingleCard';
import images from '../../images/images';

const fruitsTable = [
  {
    name: 'Pomme',
    src: images.apple,
    found: false,
  },
  {
    name: 'Avocat',
    src: images.avocado,
    found: false,
  },
  {
    name: 'Banane',
    src: images.banana,
    found: false,
  },
  {
    name: 'Maïs',
    src: images.corn,
    found: false,
  },
  {
    name: 'Citron',
    src: images.lemon,
    found: false,
  },
  {
    name: 'Salade',
    src: images.lettuce,
    found: false,
  },
  {
    name: 'Oignon',
    src: images.onion,
    found: false,
  },
  {
    name: 'Fraise',
    src: images.strawberry,
    found: false,
  },
];

function App() {
  // States
  const [cards, setCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [found, setFound] = useState(false);

  // useEffect
  useEffect(() => {
    mixCards();
  }, []);

  // 4- Comparer les deux cartes
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setFound(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  // Fonctions
  // 1- Mélanger les cartes
  const mixCards = () => {
    const mixedCards = [...fruitsTable, ...fruitsTable]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(mixedCards);
    setTries(0);
  };

  // 2- Distinguer les 2 choix
  const choiceHandler = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // 3- Reset les deux choix et ajouter une tentative
  const resetChoices = () => {
    setFirstChoice();
    setSecondChoice();
    setTries((prevTries) => prevTries + 1);
    setFound(false);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.Timer}>
          <Timer />
        </div>
        <div className={styles.Tries}>
          <Tries tries={tries} />
        </div>
      </div>
      <h5 className={styles.titleInstruction}>
        Cliquer sur une carte pour commencer
      </h5>
      <div className={styles.Cards}>
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              link={card.src}
              name={card.name}
              choiceHandler={choiceHandler}
              clicked={
                card === firstChoice || card === secondChoice || card.matched
              }
              found={found}
              tries={tries}
              matched={card.matched}
            />
          );
        })}
      </div>
      <div className={styles.btn} onClick={() => mixCards()}>
        <p className={styles.btnText}>Réinitialiser</p>
      </div>
    </div>
  );
}

export default App;
