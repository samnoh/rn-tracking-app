import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const styles = StyleSheet.create({
    map: {
        height: 300,
        marginBottom: 10
    },
    timestamp: {
        textAlign: 'right',
        fontSize: 16,
        color: 'gray',
        marginRight: 5
    }
});

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);

    const track = state.find(track => track._id === _id);
    const initialCoords = track.locations[0].coords;
    const initialTimestamp = track.locations[0].timestamp;

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...initialCoords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
            >
                <Polyline coordinates={track.locations.map(location => location.coords)} />
            </MapView>
            <Text style={styles.timestamp}>
                {new Date(initialTimestamp).toISOString().substring(0, 10)}
            </Text>
        </View>
    );
};

TrackDetailScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
});

export default TrackDetailScreen;
