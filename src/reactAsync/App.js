import React from 'react';
import { Provider } from 'react-redux';
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
export const App = () => (
  <Provider store={store}>
    <div className={sheet.classes.appRoot}>
      <AvailableCities/>
      <WeatherMaster/>
    </div>
  </Provider>
);
