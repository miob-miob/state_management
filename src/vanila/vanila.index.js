import { jss } from './jss';
// import { getRandomString, getRandInt } from '../utils/getRandomString';


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
  const page = 'statistics';

  appRoot.appendChild(Navigation(page));


  if (page === 'currentGame') {
    appRoot.appendChild(CurrentGamePage(state));
  } else if (page === 'statistics') {
    appRoot.appendChild(StatisticsPage(state));
  } else {
    const notFoundPage = document.createElement('div');
    notFoundPage.textContent = 'Unknown route!!!';
    appRoot.appendChild(notFoundPage);
  }
};

setInterval(rerender, 20000);
rerender();
