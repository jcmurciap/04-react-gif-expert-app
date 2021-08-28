import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Receive 'setCategories' function from 'GifExpertApp'
export const AddCategory = ({setCategories}) => {
    
    const [ inputValue, setInputValue ] = useState('');
    
    //Allows us to change input text box <--> Re-writting 'inputValue' status
    const handleInputChange = (e) => {
        // Block to change input text box
        //console.log( e.target.value );
        
        setInputValue( e.target.value );
    }
    
    
    const handleSubmit = (e) => {
        
        //Block web browser refreshing
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {
            // Add each category to existent category array
            setCategories( cats => [ inputValue, ...cats ] );
            
            // Block duplicate posting
            setInputValue('')
        
        }
    }
    
    
    return(
        
        <form onSubmit= {handleSubmit} >
            <input 
                type='text'
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
