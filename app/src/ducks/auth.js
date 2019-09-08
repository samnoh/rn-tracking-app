import api from '../utils/api';

// actions
const ADD_ERROR = 'ADD_ERROR';
const RESET_ERROR = 'RESET_ERROR';

// action creators
const addError = () => ({
    type: ADD_ERROR,
    payload: 'Something went wrong with sign up'
});

const resetError = () => ({
    type: RESET_ERROR
});

// thunks
export const signup = dispatch => async ({ email, password }) => {
    // make api req to sign up with email and password
    // modify app state
    try {
        const res = await api.post('/signup', { email, password });
        console.log(res.data);
    } catch (e) {
        dispatch(addError());
        setTimeout(() => {
            dispatch(resetError());
        }, 5000);
    }
};

export const signin = dispatch => ({ email, password }) => {
    // try to signin
};

export const signout = dispatch => () => {};

const authReducer = (state, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state, errorMessage: action.payload };
        case RESET_ERROR:
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

export default authReducer;
