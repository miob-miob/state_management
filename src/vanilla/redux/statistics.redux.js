const SET_CURRENT_GAME_STORED = 'statistics/SET_CURRENT_GAME_STORED';
const STORE_CURRENT_GAME = 'statistics/STORE_CURRENT_GAME';


const initialState = {
  gameData: [],
  isCurrentGameStored: false
};
export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GAME_STORED:
      return {
        ...state,
        isCurrentGameStored: action.payload
      };

    case STORE_CURRENT_GAME:
      return {
        ...state,
        gameData: [...state.gameData, action.payload],
        isCurrentGameStored: true
      };

    default:
      return state;
  }
};


export const setCurrentGameStored = (stored) => ({
  type: SET_CURRENT_GAME_STORED,
  payload: stored
});


export const storeCurrentGame = (order, timeStarted) => ({
  type: STORE_CURRENT_GAME,
  payload: {
    order,
    duration: Date.now() - timeStarted
  }
});
