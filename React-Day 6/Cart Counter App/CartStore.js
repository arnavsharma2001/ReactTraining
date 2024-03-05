import { legacy_createStore as createStore } from 'redux';


const cartReducer = (state, action) => {
    action.type = action.type.toUpperCase();

    let updatedState = {};

    switch (action.type) {
        case "CREATE":
            updatedState.count = 0;
            break;

        case "ADD":
            updatedState.count = state.count + 1;
            break;

        case "REMOVE":

            updatedState.count = state.count > 0 ? state.count - 1 : 0;
            break;

        default:
            updatedState = state;
            break;


    }

    return updatedState;
}

const cartStore = createStore(cartReducer);
export default cartStore;