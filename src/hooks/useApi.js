import axios from "axios"

export default function useApi(){
    const api = axios.create();

    api.defaults.baseURL = "https://api.adoptez1artisan.com"

    api.defaults.validateStatus = (status) => {
        return status >= 200 && status <= 599
    }

    api.defaults.headers.common = {
        "content-type": "application/json; charset=UTF-8"
    }

    const authToken = localStorage.getItem("authToken");
    if(authToken) {
        api.defaults.headers.common["Authhorization"] = "Bearer" + authToken
    }

    return api
}