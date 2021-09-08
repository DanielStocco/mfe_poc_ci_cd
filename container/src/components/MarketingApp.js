import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default () => {
    //Esto no lo entendí
    const ref = useRef(null);
    const history = useHistory();

    const onNavigate = (location) => {
        const { pathname: currentPathname } = history.location
        const { pathname: nextPathName } = location;
        if (currentPathname === nextPathName) { return }
        history.push(nextPathName)
    }

    useEffect( () => {
        const { onParentNavigate } = mount(ref.current, { onNavigate });
        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}/>
}