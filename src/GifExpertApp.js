
import React, { useState } from 'react';

// components
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ( {defaultCategories = []} )  => {
    
    // Status hook
    const [categories, setCategories ] = useState( defaultCategories );
    
    // JSX
    return (
        <>
            <h2>You can find GIF's that you want!</h2>
            
            {/* 'AddCategory' and 'GifExpertApp' communication */}
            <AddCategory setCategories = { setCategories }/>
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
            <p>Developed by Juan C. Murcia.</p>
        </>
    )
}







