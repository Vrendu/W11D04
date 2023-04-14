const ADD_ITEM = "ADD_ITEM";



export const addItem = (itemID) => ({
    type: ADD_ITEM,
    itemID,
    count: 1 
})

export const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };
    switch (action.type) {
        case ADD_ITEM:
            //console.log(nextState);
            nextState[action.itemID] = {id: action.itemID, count: action.count};
            return nextState;
        default: 
            return state;
    }
}