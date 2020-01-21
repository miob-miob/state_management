import { jss } from '../jss';
import { theme } from '../theme';
import { GameGrid } from './grid';
import { getArrayInSquareMatrix, getRandomArray } from '../../utils';

const styles = jss.createStyleSheet({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  controlPanel: {
    marginLeft: '15px',
    padding: '15px',
    display: 'flex',
    flexFlow: 'column',
    height: '15em',
    backgroundColor: theme.lightGrey,
    borderRadius: '10px'
  },
  restartGameButton: {
    padding: '1em',
    marginBottom: '10px'
  },
  newGameButton: {
    padding: '1em',
    marginTop: '15px',
    backgroundColor: theme.sexyPurple,
    color: theme.extraLightGray
  }
});
styles.attach();


const getExampleGridData = () => {
  const data = getRandomArray(16);
  const dataForGrid = data.map((item) => ({ active: Math.random() > 0.5, label: item, onClick: () => console.log(item) }));
  return getArrayInSquareMatrix(dataForGrid);
};

export const CurrentGamePage = (state) => {
  const secondsLastGame = 10.8;
  const gameFinished = true;

  const root = document.createElement('div');
  root.className = styles.classes.root;

  const controlPanel = document.createElement('div');
  controlPanel.className = styles.classes.controlPanel;

  const restartGameButton = document.createElement('button');
  restartGameButton.className = styles.classes.restartGameButton;
  restartGameButton.textContent = 'Restart game';
  controlPanel.appendChild(restartGameButton);


  const timeOfLastGame = document.createElement('div');
  timeOfLastGame.textContent = `Last game duration: ${secondsLastGame} s`;
  controlPanel.appendChild(timeOfLastGame);

  if (gameFinished) {
    const newGameButton = document.createElement('button');
    newGameButton.className = styles.classes.newGameButton;
    newGameButton.textContent = 'New game';
    controlPanel.appendChild(newGameButton);
  }


  const dataForGrid = state ? [] : getExampleGridData();

  root.appendChild(GameGrid(dataForGrid));
  root.appendChild(controlPanel);

  return root;
};
