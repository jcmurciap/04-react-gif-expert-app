import React, { useState } from 'react'
import PropTypes from 'prop-types'

// 'setCategories' is function from 'GifExpertApp'
export const AddCategory = ({setCategories}) => {
    
    // status hook
    const [ inputValue, setInputValue ] = useState('');
    
    // Change input textbox <--> Re-writting 'inputValue' status
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
            <p>{ inputValue }</p>
            <input 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
