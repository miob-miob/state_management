import { jss } from '../../jss';
import { theme } from '../../theme';

const style = jss.createStyleSheet({
  root: {
    display: 'flex',
    flexFlow: 'column'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '200%',
    padding: '15px',
    color: theme.border
  },
  statRow: {
    display: 'flex',
    flexFlow: 'row',
    marginTop: '1em',
    marginLeft: '1em'
  },
  statLabel: {
    margin: '1em',
    justifyContent: 'center',
    width: '10em',
    color: theme.border
  },

  statValue: {
    margin: '1em',
    justifyContent: 'center',
    width: '5em',
    color: theme.sexyPurple,
    fontWeight: 'bold'
  }

});
style.attach();

export const StatisticsPage = (state, dispatch) => {
  const root = document.createElement('div');
  root.className = style.classes.root;

  const title = document.createElement('div');
  title.className = style.classes.title;
  title.textContent = 'Statistics of previous games';
  root.appendChild(title);

  const statData = [
    { label: 'Total spend time: ', value: null },
    { label: 'Average game time: ', value: null },
    { label: 'Quickest game time: ', value: null },
    { label: 'SLowest game time: ', value: null }
  ];

  statData.forEach((item) => {
    const { label, value } = item;
    const row = document.createElement('div');
    row.className = style.classes.statRow;

    const labelEl = document.createElement('div');
    labelEl.className = style.classes.statLabel;
    labelEl.textContent = label;

    const valueEl = document.createElement('div');
    valueEl.className = style.classes.statValue;
    valueEl.textContent = `${value || '-'}  sec`;
    row.appendChild(labelEl);
    row.appendChild(valueEl);
    root.appendChild(row);
  });

  return root;
};
