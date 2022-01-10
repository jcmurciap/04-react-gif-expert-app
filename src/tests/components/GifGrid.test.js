import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGift } from '../../hooks/useFetchGift';

// simulate or mimic useFetchGift hook
jest.mock('../../../hooks/useFetchGift'); 

describe( 'GifGrid tests', () => {
    
    const category = 'One Punch';
    
    test( 'Make snapshot compatible', () => {
        
        useFetchGift.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow( <GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Show items when are loaded images using `useFetchGift` ', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/image.png',
            title: 'my_title'
        },
        {
            id: '123',
            url: 'https://localhost/image.png',
            title: 'my_title'
        }];
                
        useFetchGift.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid category={category}/>);
        
        // if loading doesn't exist, shouldn't print ´Loading´
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

})