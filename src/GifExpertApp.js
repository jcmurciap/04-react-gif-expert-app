
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()  => {
    
    // Can't mutate, can't renderizing and We need to do it...
    //const categories = ['One Punch', 'Samulari X', 'Dragon Ball'];

    // Renderizing if we add or modify whatever item of 'categories'
    const [categories, setCategories ] = useState( ['One Punch'] );

    
    // Add 'The simpsons' to categories and renderizing
    // const handleAdd = () => {
    //     setCategories( [ 'The simpsons', ...categories ] );
        
    //     Or doing like
    //     setCategories( cats => [ 'The simpsons', ...cats ] );
    // }
    
    
    return (
        <>
            <h2>GifExpertApp</h2>
            
            {/* Communication among two components 'AddCategory' and 'GifExpertApp' */}
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key = {category}
                            category = {category}  
                        />
                    ))
                }
            </ol>
        </>
    )
}
