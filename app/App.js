import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

import { setNavigator } from './src/utils/navigationRef';
import { Feather } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
    title: 'Tracks',
    tabBarIcon: <Feather name="list" size={27} color="gray" />
};

const switchNavigator = createSwitchNavigator(
    {
        ResolveAuth: ResolveAuthScreen,
        loginFlow: createStackNavigator({
            Signup: SignupScreen,
            Signin: SigninScreen
        }),
        mainFlow: createBottomTabNavigator({
            trackListFlow,
            TrackCreate: TrackCreateScreen,
            Account: AccountScreen
        })
    },
    {
        initialRouteName: 'ResolveAuth'
    }
);

const App = createAppContainer(switchNavigator);

export default () => (
    <AuthProvider>
        <LocationProvider>
            <TrackProvider>
                <App ref={setNavigator} />
            </TrackProvider>
        </LocationProvider>
    </AuthProvider>
);
