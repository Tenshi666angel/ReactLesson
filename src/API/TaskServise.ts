import axios, { AxiosResponse } from "axios";

export class TaskServise {
    static async getAll(limit: number = 10, page: number = 1): Promise<AxiosResponse> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getById(id: string | undefined): Promise<AxiosResponse> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        return response;
    }

    static async getComments(id: string | undefined): Promise<AxiosResponse> {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        return response;
    }
}