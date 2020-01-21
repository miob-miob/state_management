// import { jss } from './jss';
// import { getRandomString, getRandInt } from '../utils/getRandomString';


import { GameGrid } from './components/grid';
import { getShuffledArray, getArrayInSquareMatrix } from '../utils';

const appRoot = document.getElementById('root');

const rerender = () => {
  appRoot.innerHTML = '';
  const data = getShuffledArray(16);
  const dataForGrid = data.map((item) => ({ active: Math.random() > 0.5, label: item, onClick: () => console.log(item) }));
  appRoot.appendChild(GameGrid(getArrayInSquareMatrix(dataForGrid)));
};

setInterval(rerender, 10000);
rerender();
