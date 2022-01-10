import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe( 'tests GifExpertApp', () => {
    
    test( 'make GifExpertApp compatible', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    
    test( 'Matched categories list', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );

        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find( 'GifGrid' ).length).toBe( categories.length );
    } )
})

