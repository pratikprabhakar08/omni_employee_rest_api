import axios, { AxiosResponse } from 'axios';

// getting all posts
const getCountryDetails = async (pathVariable: string) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/alpha/`+pathVariable);
    return result;
};

export default { getCountryDetails };