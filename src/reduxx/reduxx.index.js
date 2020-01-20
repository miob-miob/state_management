import { getRandomString, getRandInt } from '../utils/getRandomString';

const smallChild = (name) => {
  console.log(name);
  const root = document.createElement('div');
  const nameContainer = document.createElement('span');
  nameContainer.textContent = name;
  const nameContainerAgain = document.createElement('span');
  nameContainerAgain.textContent = name;
  root.appendChild(nameContainer);
  root.appendChild(nameContainerAgain);
  return root;
};


const mother = (nChilds) => {
  const root = document.createElement('div');
  root.setAttribute('class', 'motherFucker');
  console
  new Array(nChilds).map((x) => {
    console.log('pice!');
    const child = smallChild(getRandomString());
    root.appendChild(child);
  });
  return root;
};

const appRoot = document.createElement('div');
appRoot.setAttribute('id', 'reduxxApp');
appRoot.textContent = 'Hovno!!!!';
document.body.appendChild(appRoot);

const rerender = () => {
  const nChilds = getRandInt(1, 8);
  appRoot.innerHTML='';
  appRoot.appendChild(mother(nChilds));
};

setInterval(rerender, 5000);
