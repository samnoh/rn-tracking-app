import { AsyncStorage } from 'react-native';

import api from '../utils/api';
import { navigate } from '../utils/navigationRef';

// actions
const SIGNIN = 'SIGNIN';
const SIGNOUT = 'SIGNOUT';
const SHOW_ERROR = 'SHOW_ERROR';

// action creators
const signinAction = token => ({
    type: SIGNIN,
    payload: token
});

const signoutAction = () => ({
    type: SIGNOUT
});

const showErrorAction = message => ({
    type: SHOW_ERROR,
    payload: message
});

// thunks
export const clearErrorMessage = dispatch => () => {
    dispatch(showErrorAction(''));
};

export const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch(signinAction(token));
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};

export const signup = dispatch => async ({ email, password }) => {
    try {
        const res = await api.post('/signup', { email, password });
        const token = res.data.token;

        await AsyncStorage.setItem('token', token);

        dispatch(signinAction(token));
        dispatch(showErrorAction(''));

        navigate('TrackList');
    } catch (e) {
        dispatch(showErrorAction('Something went wrong with network'));
    }
};

export const signin = dispatch => async ({ email, password }) => {
    try {
        const res = await api.post('/signin', { email, password });
        const token = res.data.token;

        await AsyncStorage.setItem('token', token);

        dispatch(signinAction(token));
        dispatch(showErrorAction(''));

        navigate('TrackList');
    } catch (e) {
        dispatch(showErrorAction('Something went wrong with network'));
    }
};

export const signout = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token');

        dispatch(signoutAction());
        navigate('Signin');
    } catch (e) {}
};

const authReducer = (state, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, token: action.payload };
        case SHOW_ERROR:
            return { ...state, errorMessage: action.payload };
        case SIGNOUT:
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

export default authReducer;
