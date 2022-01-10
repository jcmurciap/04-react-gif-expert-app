import { getGifs } from "../../helpers/getGifs"


describe ( 'Fetch getGifs tests', () => {
    
    test( 'Return 10 elements', async() => {
        const gifs = await getGifs( 'One Punch' );
        expect( gifs.length ).toBe( 10 );
    } )
} )










