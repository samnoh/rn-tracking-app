import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')} />
        </View>
    );
};

export default TrackListScreen;
