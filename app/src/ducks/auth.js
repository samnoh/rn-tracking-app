import { AsyncStorage } from 'react-native';

import api from '../utils/api';
import { navigate } from '../utils/navigationRef';

// actions
const SIGNUP = 'SIGNUP';
const SHOW_ERROR = 'SHOW_ERROR';

// action creators
const signupAction = token => ({
    type: SIGNUP,
    payload: token
});

const showErrorAction = message => ({
    type: SHOW_ERROR,
    payload: message
});

// thunks
export const signup = dispatch => async ({ email, password }) => {
    try {
        const res = await api.post('/signup', { email, password });
        const token = res.data.token;

        await AsyncStorage.setItem('token', token);

        dispatch(signupAction(token));
        dispatch(showErrorAction(''));

        navigate('TrackList');
    } catch (e) {
        dispatch(showErrorAction('Something went wrong with network'));
        setTimeout(() => {
            dispatch(showErrorAction(''));
        }, 3000);
    }
};

export const signin = dispatch => ({ email, password }) => {};

export const signout = dispatch => () => {};

const authReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, token: action.payload };
        case SHOW_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

export default authReducer;
