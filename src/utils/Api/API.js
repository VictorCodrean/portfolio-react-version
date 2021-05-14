import axios from 'axios';

const API = function () {
    return axios.get(
        "https://api.github.com/users/VictorCodrean"
    )
}

export default API;