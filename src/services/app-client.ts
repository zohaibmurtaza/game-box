import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '98e82b2795394dd7abaff5202cbaade9'
    }
})