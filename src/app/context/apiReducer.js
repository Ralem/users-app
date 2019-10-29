import {
    API_PAGE_CHANGE,
    API_PAGE_INCREMENT,
    API_PAGE_DECREMENT,
    API_LOADING_SET,
    API_GENDER_SET,
    API_NATIONALITY_ADD,
    API_NATIONALITY_REMOVE,
    API_NATIONALITIES_CLEAN,
    API_PER_PAGE_AMOUNT_SET,
    API_PAGES_MAX_SET
} from "./apiActions";
export const apiInitialState = {
    page: 1,
    loading: false,
    perPage: 30,
    maxUsers: 5000,
    gender: "",
    nationalities: [],
    nationalitiesSupported: [
        "AU",
        "BR",
        "CA",
        "CH",
        "DE",
        "DK",
        "ES",
        "FI",
        "FR",
        "GB",
        "IE",
        "IR",
        "NO",
        "NL",
        "NZ",
        "TR",
        "US"
    ],
    maxPages: 1
};
const NationalitiesModify = (state, nat, type = "add") => {
    const updatedNationalities = [...state.nationalities];
    const natIndex = updatedNationalities.indexOf(nat);
    if (type === "add" && natIndex < 0) {
        updatedNationalities.push(nat);
        return { ...state, nationalities: updatedNationalities };
    } else if (type === "remove" && natIndex > -1) {
        updatedNationalities.splice(natIndex, 1);
        return { ...state, nationalities: updatedNationalities };
    }
    return state;
};
const ApiReducer = (state, { type, payload }) => {
    switch (type) {
        case API_PAGE_CHANGE:
            if (payload > 0 && payload <= state.maxPages)
                return { ...state, page: payload };
            break;
        case API_PAGE_INCREMENT:
            if (!state.loading && state.page < state.maxPages)
                return { ...state, page: state.page + 1 };
            break;
        case API_PAGE_DECREMENT:
            if (state.page > 1 && !state.loading)
                return { ...state, page: state.page - 1 };
            break;
        case API_LOADING_SET:
            return { ...state, loading: payload };
        case API_GENDER_SET:
            return { ...state, gender: payload };
        case API_NATIONALITY_ADD:
            return NationalitiesModify(state, payload, "add");
        case API_NATIONALITY_REMOVE:
            return NationalitiesModify(state, payload, "remove");
        case API_NATIONALITIES_CLEAN:
            return { ...state, nationalities: [] };
        case API_PER_PAGE_AMOUNT_SET:
            return { ...state, perPage: payload };
        case API_PAGES_MAX_SET:
            return { ...state, maxPages: payload };
    }
    return state;
};
export default ApiReducer;
