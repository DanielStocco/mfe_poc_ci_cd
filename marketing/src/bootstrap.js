import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const mount = (element) => {
    ReactDom.render(<App/>, element)
};

if(process.env.NODE_ENV === 'development') {
    const rootElement = document.getElementById('_marketing-dev-root');
    if (rootElement) { mount(rootElement); }
}

export { mount };