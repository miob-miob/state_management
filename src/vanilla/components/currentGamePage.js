import { jss } from '../jss';
import { theme } from '../theme';
import { GameGrid } from './grid';
import { getArrayInSquareMatrix, getRandomArray } from '../../utils';

import { setCellActive, resetGame } from '../redux/currentGame.redux';
import {
  getCellsOrder,
  getCellStates,
  getCurrentGameStartTime,
  getHighestActiveLabel,
  getLastGameDuration,
  isAllActive,
  isCurrentGameStored
} from '../redux/selectors';
import { setCurrentGameStored, storeCurrentGame } from '../redux/statistics.redux';

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

const extractDataAndHandlersForGrid = (state, dispatch) => {
  const order = getCellsOrder(state);
  const cellStates = getCellStates(state);
  const highestActiveLabel = getHighestActiveLabel(state);
  const statesAndHandlers = order.map((label) => ({
    ...cellStates[label],
    onClick: (label === highestActiveLabel + 1) ? () => dispatch(setCellActive(label)) : () => {}
  }));

  return getArrayInSquareMatrix(statesAndHandlers);
};

export const CurrentGamePage = (state, dispatch) => {
  const lastGaneDuration = getLastGameDuration(state);
  const allActive = isAllActive(state);
  const restartGame = () => {
    dispatch(resetGame());
    dispatch(setCurrentGameStored(false));
  };
  const currentGameStored = isCurrentGameStored(state);


  const root = document.createElement('div');
  root.className = styles.classes.root;

  const controlPanel = document.createElement('div');
  controlPanel.className = styles.classes.controlPanel;

  const restartGameButton = document.createElement('button');
  restartGameButton.className = styles.classes.restartGameButton;
  restartGameButton.textContent = 'Restart game';
  restartGameButton.onclick = restartGame;
  controlPanel.appendChild(restartGameButton);


  const timeOfLastGame = document.createElement('div');
  timeOfLastGame.textContent = `Last game duration: ${lastGaneDuration} s`;
  controlPanel.appendChild(timeOfLastGame);


  if (allActive && !currentGameStored) {
    const order = getCellsOrder(state);
    const startTime = getCurrentGameStartTime(state);


    const newGameButton = document.createElement('button');
    newGameButton.className = styles.classes.newGameButton;
    newGameButton.textContent = 'Finish game';
    newGameButton.onclick = () => {
      dispatch(storeCurrentGame(order, startTime));
    };
    controlPanel.appendChild(newGameButton);
  }


  const dataForGrid = state ? extractDataAndHandlersForGrid(state, dispatch) : getExampleGridData();

  root.appendChild(GameGrid(dataForGrid));
  root.appendChild(controlPanel);

  return root;
};
