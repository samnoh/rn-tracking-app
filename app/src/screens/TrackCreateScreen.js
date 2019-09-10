import React, { useContext, useCallback } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import VerticalSpacer from '../components/VerticalSpacer';
import TrackForm from '../components/TrackForm';
// import '../utils/_mockLocation';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
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
        <SafeAreaView forceInset={{ top: 'always' }}>
            <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset={20}>
                <VerticalSpacer xl>
                    <Text h3 style={styles.title}>
                        Create a Track
                    </Text>
                </VerticalSpacer>
                <Map />
                {error ? <Text>Please enable location services</Text> : null}
                <VerticalSpacer lg>
                    <TrackForm />
                </VerticalSpacer>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default withNavigationFocus(TrackCreateScreen);
