import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// PROCESA CADA ENTRADA POR TECLADO
export const useFetchGift = ( category ) => {
    
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    // Los useEffect NO pueden ser async
    useEffect( () => {
        getGifs( category ) // {id, title, url}
        .then( imgs => {
            setState({
                data: imgs,
                loading: false
            })      
        }) 
    }, [ category ])
    
    return state; // {data{id, title, url}, loading}
}
