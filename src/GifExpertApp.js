import React, { useState } from 'react';

export const GifExpertApp = ()  => {
    
    // Can't mutate, can't renderizing and We need to do it...
    //const categories = ['One Punch', 'Samulari X', 'Dragon Ball'];

    // React renderizing if we add or modify whatever element of 'categories'
    const [categories, setCategories ] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );

    
    // Add 'The simpsons' to categories and renderizing
    const handleAdd = () => {
        setCategories( [ 'The simpsons', ...categories] );
        
        // Or doing like
        //setCategories( cats => [ 'The simpsons', ...cats ] );
    }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        // 'key' into 'li' is a bad practice but works.
                        return <li key={ category }>{ category }</li>
                    } )
                }
            </ol>
        </>
    )
}
