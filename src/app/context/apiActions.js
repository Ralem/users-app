export const API_PAGE_CHANGE = "API_PAGE_CHANGE";
export const API_LOADING_SET = "API_LOADING_SET";
export const API_PAGE_INCREMENT = "API_PAGE_INCREMENT";
export const API_PAGE_DECREMENT = "API_PAGE_DECREMENT";
export const API_GENDER_SET = "API_GENDER_SET";
export const API_NATIONALITY_ADD = "API_NATIONALITY_ADD";
export const API_NATIONALITY_REMOVE = "API_NATIONALITY_REMOVE";
export const API_NATIONALITIES_CLEAN = "API_NATIONALITIES_CLEAN";
export const apiPageChange = payload => ({ type: API_PAGE_CHANGE, payload });
export const apiLoadingSet = payload => ({ type: API_LOADING_SET, payload });
export const apiPageIncrement = () => ({ type: API_PAGE_INCREMENT });
export const apiPageDecrement = () => ({ type: API_PAGE_DECREMENT });
export const apiGenderSet = payload => ({ type: API_GENDER_SET, payload });
export const apiNationalityAdd = payload => ({
    type: API_NATIONALITY_ADD,
    payload
});
export const apiNationalityRemove = payload => ({
    type: API_NATIONALITY_REMOVE,
    payload
});
export const apiNationalitiesClean = () => ({ type: API_NATIONALITIES_CLEAN });
