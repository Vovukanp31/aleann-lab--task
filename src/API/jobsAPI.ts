import axios from 'axios';

const API_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy'

export const API_INSTANCE = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
    }
})