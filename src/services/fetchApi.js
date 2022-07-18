import axios from 'axios'

let endpoint = "https://rickandmortyapi.com/api"

/** 
 * Fetch from rick & morty API.
 *  @param {String} params the params to the url.
 *  @return {Promise<any>} response from the api
*/
export default async function getCharacters(params) {
    const path = endpoint + params;
    const req = await axios.get(path);
    return req.data;
}