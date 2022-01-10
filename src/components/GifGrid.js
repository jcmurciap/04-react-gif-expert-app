// useEfect: allow us to apply conditions
import React from 'react';
import { useFetchGift } from '../hooks/useFetchGift';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {
        
    const { data:images, loading } = useFetchGift( category );
  
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
 