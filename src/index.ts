import { rutaImagen } from './rutaimagen';
import './static/style.css';
//import imageUrl from '../src/assets/images/logo2.png';


const App = () => {
    const image = rutaImagen;
    const Container = document.createElement('div');

    const CodeImage = document.createElement('img');
    Container.appendChild(CodeImage);
    CodeImage.src = image;

    return Container;
};

document.body.appendChild(App());
console.log("Hello desde webpack :)...");
console.log("hello again");