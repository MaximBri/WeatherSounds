import itemsData from './data/weatherList';
import { Item } from './components/item/Item';
import './styles/reset.scss';
import './styles/index.scss';

const list = document.querySelector('.sounds-list');
let activeSoundId = 0;

const changeActiveSound = (id) => {
  activeSoundId = id;
  list.innerHTML = '';
  renderItems();
  setBackground();
};

const renderItems = () => {
  itemsData.forEach((item) => {
    const element = Item({ ...item, activeSoundId, changeActiveSound });
    list.appendChild(element);
  });
};

const setBackground = () => {
  const app = document.body;
  const activeItem = itemsData.find((item) => item.id === activeSoundId);
  if(activeItem){
    app.style.backgroundImage = `url(assets/${activeItem.imagePath})`;
  } else {
    app.style.backgroundImage = 'url(assets/summer-bg.jpg)';
  }
};

renderItems();
setBackground();
