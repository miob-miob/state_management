const SET_PAGE = 'navigation/SET_PAGE';

const initState = {
  page: 'currentGame'
};
export const navigationReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { page: action.payload };
    default:
      return state;
  }
};


export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page
});
