import { GET_DATA_USER } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_USER:
            console.log(actions.data);
            return actions.data;

        default:
            return state;
    }
};
