import { useFetchGift } from '../../hooks/useFetchGift';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGift hook test', () => {
    test( 'return initial status', async() => {
        
        // Crea un componente virtual y almacena al custom hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGift( 'One Puch' ) ); 

        const { data, loading } = result.current; // valor actual del custom hook
        // const { data, loading } = useFetchGift( 'One Punch' );   
        await waitForNextUpdate();
        
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );  
    } )

    test( 'return an images array and loading === false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGift( 'One Punch' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false ); 
    })
})


