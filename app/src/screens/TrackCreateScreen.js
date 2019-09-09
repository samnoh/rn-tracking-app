import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

import Map from '../components/Map';

const styles = StyleSheet.create({});

const TrackCreateScreen = () => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInse={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

export default TrackCreateScreen;
