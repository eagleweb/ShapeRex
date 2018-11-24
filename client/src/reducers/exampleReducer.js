const initialState = {
    count: 5
};

export default function counter (state = initialState, action) {
    switch (action.type){
        case 'CHANGE_NUMBER':
            return {...state, count: state.count + action.payload};
        default:
            return state
    }
}