// PROCESA CADA ENTRADA POR TECLADO

import React from 'react';
import PropTypes from 'prop-types';


import { useFetchGift } from '../hooks/useFetchGift';
import { GifGridItem } from './GifGridItem';


// porque desestructura 'category' como si fuese un objeto????
export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGift( category );
    // images: { id, data, url}
    // loading: bool

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
 