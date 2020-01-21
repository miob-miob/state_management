import { jss } from '../jss';
import { theme } from '../theme';

const sheet = jss.createStyleSheet({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '133px',
    height: '133px',
    fontSize: '300%',
    border: ['2px', 'solid', theme.border],
    borderRadius: '10px',
    '&.active': {
      backgroundColor: theme.active
    },
    '&.nonActive': {
      backgroundColor: theme.nonActive
    }
  }
});
sheet.attach();

export const Cell = (label = 'undknown', onClick = () => {}, active = false) => {
  const root = document.createElement('div');
  root.setAttribute('class', `${sheet.classes.root} ${active ? 'active' : 'nonActive'}`);
  root.innerText = label;
  root.onclick = onClick;
  return root;
};
