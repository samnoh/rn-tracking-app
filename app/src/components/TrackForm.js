import React, { useContext } from 'react';
import { Keyboard, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import VerticalSpacer from '../components/VerticalSpacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: 'white'
    },
    input: {
        borderBottomColor: '#50A75C'
    },
    button: {
        marginHorizontal: 10
    },
    saveButton: {}
});

const TrackForm = () => {
    const { state, startRecording, stopRecording, changeName, resetLocation } = useContext(
        LocationContext
    );
    const { name, recording, locations } = state;
    const [saveTrack] = useSaveTrack();

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter Description"
                inputContainerStyle={styles.input}
                value={name}
                onChangeText={changeName}
            />
            <VerticalSpacer md />
            {recording ? (
                <Button
                    title="Stop"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: '#C9444A' }}
                    onPress={() => {
                        stopRecording();
                        Keyboard.dismiss();
                    }}
                />
            ) : (
                <Button
                    title="Start Recording"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: '#50A75C' }}
                    onPress={() => {
                        startRecording();
                        Keyboard.dismiss();
                    }}
                />
            )}
            <VerticalSpacer sm />
            {!recording && locations.length ? (
                <>
                    <Button
                        title="Save Recording"
                        type="clear"
                        style={styles.button}
                        onPress={() => {
                            saveTrack();
                            Keyboard.dismiss();
                        }}
                    />
                    <VerticalSpacer sm />
                    <Button
                        title="Cancel"
                        type="clear"
                        style={styles.button}
                        titleStyle={{ color: 'gray' }}
                        onPress={() => {
                            resetLocation();
                            Keyboard.dismiss();
                        }}
                    />
                </>
            ) : null}
        </View>
    );
};

export default TrackForm;
