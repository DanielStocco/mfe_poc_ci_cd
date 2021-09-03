import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';


export default () => {
    //Esto no lo entendí
    const ref = useRef(null);

    useEffect( () => {
        mount(ref.current);
    })

    return <div ref={ref}/>
}