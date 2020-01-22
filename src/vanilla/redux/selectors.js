import { N_CELLS } from './currentGame.redux';

export const getCurrentPage = (state) => state.navigation.page;


export const getCellsOrder = (state) => state.currentGame.cellsOrder;
export const getCellStates = (state) => state.currentGame.cellStates;
export const getCurrentGameStartTime = (state) => state.currentGame.startTime;
export const getActiveCells = (state) => Object.values(getCellStates(state)).filter((cell) => cell.active);
export const isAllActive = (state) => getActiveCells(state).length === N_CELLS;
export const getHighestActiveLabel = (state) => {
  const activeCellLabels = getActiveCells(state).map((cell) => cell.label);
  activeCellLabels.push(0);
  return Math.max(...activeCellLabels);
};


export const isCurrentGameStored = (state) => state.statistics.isCurrentGameStored;
export const getPreviousGamesData = (state) => state.statistics.gameData;
export const getLastGameDuration = (state) => {
  const data = getPreviousGamesData(state);
  if (data.length === 0) {
    return 0;
  }
  return (data[data.length - 1].duration) / 1000;
};

export const getNumberOfPreviousGames = (state) => getPreviousGamesData(state).length;


const getPreviousGamesDurations = (state) => getPreviousGamesData(state).map((item) => item.duration);

export const getSlowestGameDuration = (state) => {
  const durations = getPreviousGamesDurations(state);
  if (durations.length === 0) {
    return '-';
  }
  return Math.max(...durations) / 1000;
};


export const getQuickestGameDuration = (state) => {
  const durations = getPreviousGamesDurations(state);
  if (durations.length === 0) {
    return '-';
  }
  return Math.min(...durations) / 1000;
};


export const getAverageGameTime = (state) => {
  const durations = getPreviousGamesDurations(state);
  if (durations.length === 0) {
    return '-';
  }
  return (durations.reduce((sum, current) => sum + current, 0) / durations.length) / 1000;
};

export const getTotalTime = (state) => {
  const durations = getPreviousGamesDurations(state);
  return durations.reduce((sum, current) => sum + current, 0) / 1000;
};
