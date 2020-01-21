import { jss } from '../jss';
import { theme } from '../theme';


const styleSheet = jss.createStyleSheet({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100wv',
    padding: '1em'
  },
  navRoot: {
    display: 'flex',
    flexFlow: 'row'
  },
  navigationItem: {
    display: 'flex',
    padding: '20px',
    margin: '5px',
    backgroundColor: theme.lightGrey,
    '&.active': {
      backgroundColor: theme.sexyPurple,
      color: theme.extraLightGray
    }

  },
  playedGamesCounter: {
    padding: '1em',
    color: theme.border
    // border: ['1px', 'solid', theme.extraLightGray]
  }
});

styleSheet.attach();

export const Navigation = (currentPage = 'currentGame', navigateCurrentGameFn, navigateStatisticsFn, playedGames) => {
  const root = document.createElement('div');
  root.className = styleSheet.classes.root;

  const navRoot = document.createElement('div');
  navRoot.className = styleSheet.classes.navRoot;
  root.appendChild(navRoot);


  const currentGameNav = document.createElement('div');
  const statisticGameNav = document.createElement('div');

  currentGameNav.className = `${styleSheet.classes.navigationItem} ${currentPage === 'currentGame' ? 'active' : ''}`;
  statisticGameNav.className = `${styleSheet.classes.navigationItem} ${currentPage === 'statistics' ? 'active' : ''}`;

  currentGameNav.textContent = 'Current game';
  statisticGameNav.textContent = 'Statistics of previous games';

  currentGameNav.onclick = navigateCurrentGameFn;
  statisticGameNav.onclick = navigateStatisticsFn;

  navRoot.appendChild(currentGameNav);
  navRoot.appendChild(statisticGameNav);

  const playedGamesCounter = document.createElement('div');
  playedGamesCounter.className = styleSheet.classes.playedGamesCounter;
  playedGamesCounter.textContent = `Played games: ${playedGames || 0}`;
  root.appendChild(playedGamesCounter);

  return root;
};
