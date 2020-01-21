// import { jss } from './jss';
// import { getRandomString, getRandInt } from '../utils/getRandomString';


import { Cell } from './components/cell';

const appRoot = document.getElementById('root');

const cellOne = Cell('1', () => console.log(1), true);
const cellTwo = Cell('2', () => console.log(2), false);


appRoot.appendChild(cellOne);
appRoot.appendChild(cellTwo);
