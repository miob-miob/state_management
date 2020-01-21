// import { jss } from './jss';
// import { getRandomString, getRandInt } from '../utils/getRandomString';


import { GameGrid } from './components/grid';
import { get2DArray } from '../utils';

const appRoot = document.getElementById('root');

const rerender = () => {
  appRoot.innerHTML = '';
  const data = get2DArray(16);
  appRoot.appendChild(GameGrid(data));
};

setInterval(rerender, 10000);
rerender();
