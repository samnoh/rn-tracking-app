import createDataContext from './createDataContext';

import authReducer, { signup, signin, signout } from '../ducks/auth';

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false, errorMessage: '' }
);
