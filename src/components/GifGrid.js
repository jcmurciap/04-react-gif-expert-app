// useEfect: allow us to apply conditions
import React from 'react';
import { useFetchGift } from '../hooks/useFetchGift';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    
    // const [ images, setImages ] = useState([]);
    
    const { data:images, loading } = useFetchGift( category );


    // useEffect( () => {
    //     // This is executed when component is renderized by first time.
    //     getGifs( category ) 
    //     .then( imgs => setImages( imgs ) ) // The new status of 'images' is the setImages( imgs ) input
    // }, [ category ] ) // If category change then compile again useEfect.
    
    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map( imgs => (
                        <GifGridItem
                            key = { imgs.id }
                            {...imgs} // Envia cada una de las propiedades de las imgs como una propiedad independiente
                        />
                    ))
                }
            </div>
        </>
    )
};

