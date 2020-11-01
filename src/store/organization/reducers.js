import * as types from './types'

const initalState = {
    details: "Org Details"
}

function orgReducer(state = initalState, action){
    switch(action.type){
        case types.ADD_NEW_ORG : 
            return {
                ...state,
                details : action.payload
            }
        default: return state
    }
}

export default orgReducer;