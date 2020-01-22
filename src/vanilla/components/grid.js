import { jss } from '../../jss';
import { Cell } from './cell';

const sheet = jss.createStyleSheet({
  row: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start'
  },
  gameGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexFlow: 'column'
  }

});
sheet.attach();

const GridRow = (itemsInRow) => {
  const root = document.createElement('div');
  root.setAttribute('class', sheet.classes.row);
  itemsInRow.forEach((item) => {
    root.appendChild(Cell(item.label, item.active, item.onClick));
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
