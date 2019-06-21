import { CHANGE_SEARCH_FIELD } from './constants.js';

//This action will take the user inputs and return an object
//The payload is whatever data we're sending to the reducer
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})