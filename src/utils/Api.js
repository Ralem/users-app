import axios from "axios";
class Api {
    static url = "https://randomuser.me/api";
    static seed = "";
    static perPage = 30;
    static currentPage = 1;
    static nationalities = [];
    static genders = [];
    static get endpoint() {
        return `${this.url}?results=${this.perPage}&page=${this.currentPage}&seed=${this.seed}`;
    }

    static changePage = page => {
        this.currentPage = page;
    };

    static perPageChange = qty => {
        this.perPage = qty;
    };

    static getUsers = async () => {
        try {
            const { data } = await axios.get(this.endpoint);
            this.seed = data.info.seed;
            return data;
        } catch (error) {
            Promise.reject(error);
        }
    };
}
export default Api;
