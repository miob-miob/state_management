import { getRandomArray } from '../../utils';

const SET_CELL_ACTIVE = 'currentGame/SET_CELL_ACTIVE';
const RESET_GAME = 'currentGame/RESET_GAME';

export const N_CELLS = 16;
const getInitialState = () => {
  const data = getRandomArray(N_CELLS);
  const hashWithCellStates = {};
  data.forEach((item) => {
    hashWithCellStates[item] = {
      label: item,
      active: false
    };
  });

  return {
    cellsOrder: data,
    cellStates: hashWithCellStates,
    startTime: Date.now()
  };
};

export const currentGameReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_CELL_ACTIVE:
      return {
        ...state,
        cellStates: {
          ...state.cellStates,
          [action.payload]: {
            label: action.payload,
            active: true
          }
        }
      };
    case RESET_GAME:
      return getInitialState();
    default:
      return state;
  }
};

export const setCellActive = (cellLabel) => ({
  type: SET_CELL_ACTIVE,
  payload: cellLabel
});


export const resetGame = () => ({
  type: RESET_GAME
});
