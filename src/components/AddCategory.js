import React, { useState } from 'react'
import PropTypes from 'prop-types'

// 'setCategories' actualiza el estado de las categorias en 'GifExpertApp'
export const AddCategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('');
    
    // Re-write 'inputValue' status
    const handleInputChange = (e) => {  
        // Unblock to change default input textbox
        setInputValue( e.target.value );
    }
    
    
    const handleSubmit = (e) => {
        
        //Block web browser refreshing
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            // Add category to existent category array
            setCategories( cats => [ inputValue, ...cats ] );
            
            // Block duplicate posting
            setInputValue('');
        }
    }
        
    return(
        
        <form onSubmit = { handleSubmit }>
            
            {/* ingreso por teclado del usuario */}
            <p>{ inputValue }</p> 
            
            {/* caja de texto */}
            <input 
                type = 'text'
                value = { inputValue } 
                
                // se activa al oprimir el enter
                onChange = { handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
