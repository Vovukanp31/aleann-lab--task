import { API_INSTANCE } from "../API/jobsAPI";
import {AxiosResponse} from 'axios';
import { IJob } from "../models/IJob";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => API_INSTANCE.get(url).then(responseBody),
	post: (url: string, body: {}) => API_INSTANCE.post(url, body).then(responseBody),
	put: (url: string, body: {}) => API_INSTANCE.put(url, body).then(responseBody),
	delete: (url: string) => API_INSTANCE.delete(url).then(responseBody),
}

export const jobsService = {
    getJobsList: (): Promise<IJob[]> => requests.get('/data')
}