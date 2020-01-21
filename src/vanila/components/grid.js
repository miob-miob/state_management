import { jss } from '../jss';
import { Cell } from './cell';

const sheet = jss.createStyleSheet({
  row: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start',
    margin: '5px 0'
  },
  gameGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexFlow: 'column',
    margin: '0 5px'
  }

});
sheet.attach();

const GridRow = (itemsInRow) => {
  const root = document.createElement('div');
  root.setAttribute('class', sheet.classes.row);
  itemsInRow.forEach((item) => {
    root.appendChild(Cell(...item));
  });
  return root;
};

export const GameGrid = (arrayOfRows) => {
  const root = document.createElement('div');
  root.setAttribute('class', sheet.classes.gameGrid);
  arrayOfRows.forEach((row) => {
    root.appendChild(GridRow(row));
  });
  return root;
};
