import { store } from './redux/store';
import { jss } from './jss';

import { setPage } from './redux/navigation.redux';
import { getCurrentPage, getNumberOfPreviousGames } from './redux/selectors';

import { Navigation } from './components/navigation';
import { CurrentGamePage } from './components/currentGamePage';
import { StatisticsPage } from './components/statisticsPage';


const rootStyleSheet = jss.createStyleSheet({
  root: {
    display: 'flex',
    flexFlow: 'column'
  }

});
const appRoot = document.getElementById('root');
rootStyleSheet.attach();
appRoot.className = rootStyleSheet.classes.root;


const rerender = (state, dispatch) => {
  appRoot.innerHTML = '';


  const page = getCurrentPage(state);
  const numberOfPreviousGames = getNumberOfPreviousGames(state);
  const navigateCurrentGame = () => { dispatch(setPage('currentGame')); };
  const navigateStatistics = () => dispatch(setPage('statistics'));

  appRoot.appendChild(Navigation(page, navigateCurrentGame, navigateStatistics, numberOfPreviousGames));


  if (page === 'currentGame') {
    appRoot.appendChild(CurrentGamePage(state, dispatch));
  } else if (page === 'statistics') {
    appRoot.appendChild(StatisticsPage(state));
  } else {
    const notFoundPage = document.createElement('div');
    notFoundPage.textContent = 'Unknown route!!!';
    appRoot.appendChild(notFoundPage);
  }
};

const listenToChanges = () => {
  rerender(store.getState(), store.dispatch);
};


store.subscribe(listenToChanges);
listenToChanges();
