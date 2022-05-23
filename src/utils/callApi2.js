import axios from "axios";

const callApi2 = (endpoint, method = 'GET', data = null) => {
    return axios({
        url: `https://fbg-project.vercel.app/api/${endpoint}`,
        method,
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default callApi2;