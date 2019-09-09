import createDataContext from './createDataContext';

import authReducer, {
    clearErrorMessage,
    tryLocalSignin,
    signup,
    signin,
    signout
} from '../ducks/auth';

export const { Provider, Context } = createDataContext(
    authReducer,
    { clearErrorMessage, tryLocalSignin, signup, signin, signout },
    { token: null, errorMessage: '' }
);
