import axios from "axios";

const LOCATION_API__URL = "https://api.geoapify.com/v1";

export const LOCATION_API__INSTANCE = axios.create({
 baseURL: LOCATION_API__URL,
});