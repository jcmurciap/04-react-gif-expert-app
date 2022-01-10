// HOME DE LA APP
import React, { useState } from 'react';

// components
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ( {defaultCategories = []} )  => {
    
    const [categories, setCategories ] = useState( defaultCategories );
    
    return (
        <>
            <h2>You can find GIF's that you want!</h2>
            
            {/* agrega una nueva categoria a 'categories'  */}
            <AddCategory setCategories = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        
                        // obtener imagenes
                        <GifGrid
                            key = { category }
                            category = { category }  
                        />
                    ))
                }
            </ol>
            <p>Developed by Juan C. Murcia.</p>
        </>
    )
}