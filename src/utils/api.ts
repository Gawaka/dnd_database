import axios from "axios";

const BASE_URL = 'https://www.dnd5eapi.co/api/2014';

export const getRaces = ()=> {
    return axios.get(`${BASE_URL}/races`)
        .then(res=> {
                console.log('res.data', res.data);
                console.log('res.data.result', res.data.results);
            return res.data.results
        })
        .catch(error=> {
            console.error("error:", error);
            return [];
        })
}



getRaces();
