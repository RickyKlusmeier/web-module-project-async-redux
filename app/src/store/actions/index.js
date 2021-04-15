import axios from 'axios'

export const fetchData = () => {
    return (dispatch) => {
        axios.get('https://api.openbrewerydb.org/breweries?by_city=fort_collins')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
}