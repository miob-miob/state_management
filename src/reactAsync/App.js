import React from 'react';
import { jss } from '../jss';
import { store } from './redux/store';
import { AvailableCities, WeatherMaster } from './components';

const sheet = jss.createStyleSheet({
  appRoot: {
    padding: '1em',
    display: 'flex'
  }
});
sheet.attach();
console.log(store.getState());
export const App = () => (
  <div className={sheet.classes.appRoot}>
  <AvailableCities/>
  <WeatherMaster/>
</div>
);
