import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = nav => {
    navigator = nav;
};

// for Thunks to be able to use navigation
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};
