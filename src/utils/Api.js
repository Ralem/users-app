import axios from "axios";
class Api {
    static url = "https://randomuser.me/api";
    static seed = "";
    static maleSeed = "";
    static femaleSeed = "";
    static perPage = 30;
    static currentPage = 1;
    static nationalities = [];
    static gender;
    static get currentSeed() {
        if (this.gender === "male") {
            return this.maleSeed;
        } else if (this.gender === "female") {
            return this.femaleSeed;
        }
        return this.seed;
    }

    static get genderParam() {
        return this.gender ? `&gender=${this.gender}` : "";
    }

    static get nationalitiesParam() {
        if (this.nationalities.length > 0) {
            return this.nationalities.reduce(
                (p, c, idx) => `${p}${idx > 0 ? "," : ""}${c}`,
                "&nat="
            );
        } else {
            return "";
        }
    }

    static genderSet = gender => {
        this.gender = gender;
    };

    static nationalitiesSet = nationalities => {
        this.nationalities = nationalities;
    };

    static get endpoint() {
        return `${this.url}?results=${this.perPage}&page=${this.currentPage}${this.nationalitiesParam}&seed=${this.currentSeed}${this.genderParam}`;
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
            if (this.gender === "male") {
                console.log(data.info.seed);
                this.maleSeed = data.info.seed;
            } else if (this.gender === "female") {
                this.femaleSeed = data.info.seed;
            } else {
                this.seed = data.info.seed;
            }
            return data;
        } catch (error) {
            Promise.reject(error);
        }
    };
}
export default Api;
