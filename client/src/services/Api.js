import axios from 'axios'

export default () => {
    return axios.create({
        baseURL : 'http://Localhost:8081/'
    })
}
