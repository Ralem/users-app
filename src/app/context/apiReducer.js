import {
    API_PAGE_CHANGE,
    API_PAGE_INCREMENT,
    API_PAGE_DECREMENT,
    API_LOADING_SET
} from "./apiActions";
export const apiInitialState = {
    page: 1,
    loading: false,
    perPage: 21,
    maxUsers: 5000,
    get maxPages() {
        return Math.ceil(this.maxUsers / this.perPage);
    }
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
    }
    return state;
};
export default ApiReducer;
