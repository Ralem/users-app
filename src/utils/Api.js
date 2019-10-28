import axios from "axios";
class Api {
    static url = "https://randomuser.me/api";
    static getEndpointUrl = endpoint => `${this.url}/${endpoint}`;
    static get = async endpoint => {
        try {
            const request = await axios.get(this.getEndpointUrl(endpoint));
            return request.data;
        } catch (error) {
            Promise.reject(error);
        }
    };

    static getMultipleUsers = async (qty = 5) => {
        try {
            const request = await this.get(`?results=${qty}`);
            return request;
        } catch (error) {
            Promise.reject(error);
        }
    };
}
export default Api;
