import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
    switch (type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}