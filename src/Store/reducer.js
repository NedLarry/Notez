import * as actionTypes from '../Store/actions';

const intialstate = {
    notes: []
}

const reducer = (state = intialstate, action) => {

    switch (action.type) {
        case actionTypes.SAVENOTE:
            let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let date = new Date();
            const updatedNote = {
                id: `${days[date.getDay()]}, ${months[date.getMonth()]}`,
                title: action.data.title,
                Note: action.data.note
            }
            return{
                ...state,
                notes: state.notes.concat(updatedNote)
            }    
        default:
            return state;
    }
}

export default reducer;