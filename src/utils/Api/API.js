import axios from 'axios';

// function searchRepos() {
//     return axios.get(
//         "https://api.github.com/users/VictorCodrean/repos"
//     )
// }

// export default searchRepos;

export default {
    searchRepos: function () {
        return axios.get(
            "https://api.github.com/users/VictorCodrean/repos"
        );
    },

    searchPinnedRepos: function () {
        return axios.get(
            "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=VictorCodrean"
        );
    },

};