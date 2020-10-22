// Import styles
import '../styles/style.scss';
import ConstructionImage from '../assets/construction.png';

// Put something onto the page
const appRoot: HTMLDivElement = document.querySelector('#appRoot');

// Add a cool image
const img: HTMLImageElement = new Image();
img.src = ConstructionImage;
img.alt = "Under construction.";

appRoot.appendChild(img);

// ...and an awesome paragraph
const paragraph: HTMLParagraphElement = document.createElement('p');
const text: Text = document.createTextNode('Hello world!');

paragraph.appendChild(text);
appRoot.appendChild(paragraph);