import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe( '<AddCategory /> tests', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    
    // Life cycle 
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    } )
    
    
    test( 'Must show me right way', () => {
        expect( wrapper ).toMatchSnapshot();
    } )

    
    test('textbox should be change', () => {
        const value = 'Hello';
        const input = wrapper.find( 'input' );
        
        input.simulate('change', { // change === onChange
            target: { value: value }
        })
        //Verify that <p>{ inputValue }</p> return 'Hello'
        expect( wrapper.find('p').text().trim() ).toBe( value )
    })


    // form simulating
    test( 'shouldn\'t posting submit information with submit button ', () => {
        // submit simulation
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
    } ) 


    test('Should to call setCategories and clearing the text-box', () => {
        
        // 1. simular el inputchange
        const value = 'Hello world';
        wrapper.find( 'input' ).simulate( 'change', { target: { value: value }} );
        
        // 2. simular el submit
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} });
        
        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        
        // 4. el valor del input debe de estar ''
        expect( wrapper.find( 'input' ).prop( 'value' )).toBe('');
    })
})

