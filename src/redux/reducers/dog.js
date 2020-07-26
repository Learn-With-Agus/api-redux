import { GET_DATA_DOG } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_DOG:
            return actions.data;
        default:
            return state;
    }
};
