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
    query UltimateRaceQuery {
        races {
            index
            name
            speed
            size
            size_description
            age
            alignment
            ability_bonuses {
                bonus
            ability_score {
                name
                index
                }
            }
            ability_bonus_options {
                choose
            }
            language_desc
            languages {
                name
                index
            }
            language_options {
                choose
            }
            traits {
            index
            name
            }
            subraces {
            index
            name
            desc
            }
        }
        }
`;

return axios.post(GQL_URL, { query })
    .then(response => {
    return response.data.data.races; 
    })
    .catch(err => console.error("Помилка GraphQL:", err));
};