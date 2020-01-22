import { getRandInt } from '../utils';

const getPromiseResolvedWithValueWithinTimeWindow = (
  value,
  minT = 1200,
  maxT = 2000,
  failRate = 0,
  error = 'Unknown error!'
) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < failRate) {
      reject(error);
    } else {
      resolve(value);
    }
  }, getRandInt(minT, maxT));
});


export const cities = [
  { city: 'Dortmund', country: 'de' },
  { city: 'Brno', country: 'cz' },
  { city: 'Hlína', country: 'cz' }
];
export const getAvailableCities = () => getPromiseResolvedWithValueWithinTimeWindow(cities, 500, 2000, 0.5);

export const getCurrentWeather = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=ee32aa5c0ab6588867003e50fea7e42e`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Service failed');
  }
  return response.json();
};
