import axios from "axios";

export default {
    getParts: function() {
        const URL = "/api/parts";
        console.log()
        return axios.get(`${URL}`);
    }
}