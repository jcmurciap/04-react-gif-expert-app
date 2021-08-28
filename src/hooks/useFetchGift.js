// Los custom hooks son una forma de extraer logica de algún componente o logica que se quiere extraer de una manera sencilla para ser usada en otra ocasión.

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGift = ( category ) => {
    
    // Los hooks pueden tener estado
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    
    // Los useEffect NO pueden ser async
    useEffect( () => {
        getGifs( category )
        .then( imgs => {
            setState({
                data: imgs,
                loading: false
            })      
        }) 
    }, [ category ])
    
    return state; // { data: [], loading: true }
}
