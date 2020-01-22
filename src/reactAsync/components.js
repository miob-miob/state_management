/* eslint-disable react/prop-types */
import React from 'react';
import { cities } from './services';
import { jss } from '../jss';
import { theme } from '../theme';

const styles = jss.createStyleSheet({
  availableCitiesContainer: {
    backgroundColor: theme.lightGrey,
    padding: '1em',
    borderRadius: '10px',
    display: 'flex',
    flexFlow: 'column'
  },
  availableCitiesButton: {
    padding: '1em'
  },
  weatherContainer: {
    marginLeft: '25px',
    display: 'flex',
    flexFlow: 'column'
  },
  weatherLabel: {
    fontWeight: 'bold',
    color: theme.border
  },
  weatherValue: {
    display: 'flex',
    color: theme.sexyPurple,
    justifyContent: 'center'
  },
  weatherMaster: {
    width: '30em',
    display: 'flex',
    flexFlow: 'column',
    padding: '1em',
    borderRadius: '10px'
  },
  weatherMasterData: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-around'
  },
  weatherMasterTitle: {
    display: 'flex',
    justifyContent: 'center'

  }
});
styles.attach();

const Loader = () => <div>Loading...</div>;

const CityButton = ({ city, onclick }) => <button className={styles.classes.availableCitiesButton} onClick={onclick}>
    {city}
  </button>;

export const AvailableCities = () => {
  const isLoading = false;
  const citiesData = cities;

  return (
    <div className={styles.classes.availableCitiesContainer}>
    <h3>Available cities</h3>
    {isLoading ? <Loader/> : citiesData.map((city) => <CityButton key={city.city} city={city.city}/>)}

  </div>
  );
};


const Temperature = ({ temperature }) => (
  <div className={styles.classes.weatherContainer}>
    <div className={styles.classes.weatherLabel}>Current temperature:</div>
    <div className={styles.classes.weatherValue}> {`${temperature} °C`}</div>
  </div>
);

const Humidity = ({ humidity }) => (
    <div className={styles.classes.weatherContainer}>
      <div className={styles.classes.weatherLabel}>Current humidity:</div>
      <div className={styles.classes.weatherValue}> {`${humidity} %`}</div>
    </div>
);

export const WeatherMaster = ({ city }) => {
  const loading = false;
  if (loading) {
    return <Loader/>;
  }
  return <div className={styles.classes.weatherMaster}>
    <h3 className={styles.classes.weatherMasterTitle}>{`Weather for ${city || 'Brno'}`}</h3>
    <div className={styles.classes.weatherMasterData}>
      <Temperature temperature={-3}/>
      <Humidity humidity={87}/>
    </div>
  </div>;
};
