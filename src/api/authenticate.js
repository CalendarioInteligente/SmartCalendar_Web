import axios from "./axios";

const API_URL = '/api/oauth'

export default async function authenticate() {
    let response
    try {
        response = await axios.get(API_URL)
        return response.data;
    } catch {
        return false;
    }
}