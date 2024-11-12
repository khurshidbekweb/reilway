import axios from "axios";
import { BASE_URL_SERVER } from "../constants";

const custimAxios = axios.create({
    baseURL: BASE_URL_SERVER,
});



custimAxios.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response?.status === 406) {
            window.location.reload()
        }
        return Promise.reject(err);
    }
);

export default custimAxios;