import notebookPro from '../assets/products/notebook-nexus-pro.png';
import notebookAir from '../assets/products/notebook-nexus-air.png';
import smartphoneX from '../assets/products/smartphone-nexus-x.png';
import smartphoneLite from '../assets/products/smartphone-nexus-lite.png';
import monitor27 from '../assets/products/monitor-nexus-27.png';
import monitorUltraWide from '../assets/products/monitor-nexus-ultrawide.png';
import tecladoRGB from '../assets/products/teclado-nexus-rgb.png';
import mousePro from '../assets/products/mouse-nexus-pro.png';

const products = [
  {
    id: 1,
    name: 'Notebook Nexus Pro',
    category: 'Notebooks',
    price: 4999.9,
    image: notebookPro,
  },

  {
    id: 2,
    name: 'Notebook Nexus Air',
    category: 'Notebooks',
    price: 3599.9,
    image: notebookAir,
  },

  {
    id: 3,
    name: 'Smartphone Nexus X',
    category: 'Smartphones',
    price: 2499.9,
    image: smartphoneX,
  },

  {
    id: 4,
    name: 'Smartphone Nexus Lite',
    category: 'Smartphones',
    price: 1599.9,
    image: smartphoneLite,
  },

  {
    id: 5,
    name: 'Monitor Nexus 27',
    category: 'Monitores',
    price: 1299.9,
    image: monitor27,
  },

  {
    id: 6,
    name: 'Monitor Nexus UltraWide',
    category: 'Monitores',
    price: 2199.9,
    image: monitorUltraWide,
  },

  {
    id: 7,
    name: 'Teclado Nexus RGB',
    category: 'Periféricos',
    price: 299.9,
    image: tecladoRGB,
  },

  {
    id: 8,
    name: 'Mouse Nexus Pro',
    category: 'Periféricos',
    price: 199.9,
    image: mousePro,
  },
];

export default products;
