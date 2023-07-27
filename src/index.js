import CodeImageUrl from './assets/images/logo2.png';

const App = () => {
    const Container = document.createElement('div');

    const CodeImage = document.createElement('img');
    Container.appendChild(CodeImage);
    CodeImage.src = CodeImageUrl;

    return Container;
};

document.body.appendChild(App());