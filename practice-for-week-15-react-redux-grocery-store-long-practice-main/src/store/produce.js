import produceData from "../mockData/produce.json"

const POPULATE = "POPULATE"

//action creator
export const populateProduce = produce => ({
    type: POPULATE,
    produce: produceData
})

export default function produceReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = { ...state };
    switch (action.type) {
        case POPULATE:
            action.produce.forEach((item) => {
                nextState[item.id] = item
            })
            return nextState
        default: 
            return state;
    }
}

