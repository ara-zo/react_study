import axios from "axios";

class CustomAxios {
    baseUrl = "https://my-json-server.typicode.com/typicode/demo"

    instance = () => {
        const customAxios = axios.create({
            baseURL : this.baseUrl
        })

        return customAxios;
    }
}

export default new CustomAxios()