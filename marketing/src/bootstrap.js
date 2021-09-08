import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App'

const mount = (element, options) => {
    console.log(options);
    const history = options.defaultHistory || createMemoryHistory();

    const onParentNavigate = (location) => {
        const { pathname: currentPathname } = history.location
        const { pathname: nextPathName } = location;
        if (currentPathname === nextPathName) { return }

        history.push(nextPathName)
    }

    if (options.onNavigate) {
        history.listen(options.onNavigate)
    }

    ReactDom.render(<App history={ history }/>, element)

    return { onParentNavigate }
};

if(process.env.NODE_ENV === 'development') {
    const rootElement = document.getElementById('_marketing-dev-root');
    if (rootElement) {
        mount(rootElement, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };