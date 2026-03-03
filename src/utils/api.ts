import axios from "axios";

// const BASE_URL = 'https://www.dnd5eapi.co/api/2014';

// export const fetchRaces = ()=> {
//     return axios.get(`${BASE_URL}/races`)
//         .then(res=> {
//             return res.data.results
//         })
//         .catch(error=> {
//             console.error("error:", error);
//             return [];
//         })
// };

export const fetchRaces = () => {
const GQL_URL = 'https://www.dnd5eapi.co/graphql';

const query = `
    query GetRaces {
    races {
        index
        age
        alignment
        language_desc
        name
        size
        size_description
        speed
        updated_at
    }
    }
`;

return axios.post(GQL_URL, { query })
    .then(response => {
    return response.data.data.races; 
    })
    .catch(err => console.error("Помилка GraphQL:", err));
};