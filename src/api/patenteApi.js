import axios from "axios";

export const patenteApi = axios.create({
    baseURL: 'https://api.chilepatentes.com/api'
});