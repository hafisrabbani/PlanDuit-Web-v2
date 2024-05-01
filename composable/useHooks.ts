import axios from "axios";

export const useHooks = () => {
    const config = useRuntimeConfig();
    const BASEURL = config.public.APIBASEV1;

    const headers: object = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    const GET = async (url: String, data?: Object) => {
        try {
            const response = await axios.get(`${BASEURL}${url}`, { headers, params: data });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    const POST = async (url: String, data: Object) => {
        try {
            const response = await axios.post(`${BASEURL}${url}`, data, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return {
        GET,
        POST
    }
}