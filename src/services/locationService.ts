import { AxiosResponse } from "axios";
import { LOCATION_API__INSTANCE } from "../API/locationAPI";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params: {}) => LOCATION_API__INSTANCE.get(url, params).then(responseBody),
}

const apiKey = 'f6921c10a9504767a8bddb2c3264b685';

export const locationService = {
    getCityByGeocoding: (lat: number, lon: number): Promise<any> => requests.get('/geocode/reverse', {params:{lat, lon, apiKey}}).then(res => res.features[0].properties)
}