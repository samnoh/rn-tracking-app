import React, { useContext, useCallback } from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Feather } from '@expo/vector-icons';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import VerticalSpacer from '../components/VerticalSpacer';
import TrackForm from '../components/TrackForm';
// import '../utils/_mockLocation';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    bottom: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});

const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation
    } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [error] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <VerticalSpacer sm />
            <Text h2 style={styles.title}>
                New Track
            </Text>
            <VerticalSpacer sm />
            <Map />
            <KeyboardAvoidingView
                behavior="position"
                enabled
                keyboardVerticalOffset={0}
                contentContainerStyle={{
                    height: Dimensions.get('window').height - 550
                }}
            >
                <View style={styles.bottom} scrollEnabled={false}>
                    {error ? <Text>Please enable location services</Text> : null}
                    <TrackForm />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Feather name="plus" size={27} color="gray" />
};

export default withNavigationFocus(TrackCreateScreen);
