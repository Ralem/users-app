export const API_PAGE_CHANGE = "API_PAGE_CHANGE";
export const API_LOADING_SET = "API_LOADING_SET";
export const API_PAGE_INCREMENT = "API_PAGE_INCREMENT";
export const API_PAGE_DECREMENT = "API_PAGE_DECREMENT";
export const apiPageChange = payload => ({ type: API_PAGE_CHANGE, payload });
export const apiLoadingSet = payload => ({ type: API_LOADING_SET, payload });
export const apiPageIncrement = () => ({ type: API_PAGE_INCREMENT });
export const apiPageDecrement = () => ({ type: API_PAGE_DECREMENT });
