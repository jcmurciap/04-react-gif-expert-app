
// Get 'category' and makes http request
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=YYlrlUaZTZQBThEpIqKI53m4SEcaajzE`
    
    // Go to API and get the answer
    const resp = await fetch( url );
    
    // Convert answer to json format
    const { data } = await resp.json();

    // Go to every image
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            
            // '?' if exist image,get. Else,nothing
            url: img.images?.downsized_medium.url
        }
    } )
    return gifs;
}