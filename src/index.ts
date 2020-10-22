import './style.scss';

// Put something onto the page
const appRoot: HTMLDivElement = document.querySelector('#appRoot');

const paragraph: HTMLParagraphElement = document.createElement('p');
const text: Text = document.createTextNode('Hello world!');

paragraph.appendChild(text);
appRoot.appendChild(paragraph);