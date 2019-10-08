import React, { useContext, useEffect } from 'react';
import {
    ScrollView,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Swipeout from 'react-native-swipeout';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import VerticalSpacer from '../components/VerticalSpacer';
import { Context as TrackContext } from '../context/TrackContext';

const styles = StyleSheet.create({
    title: {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    listContainer: {
        marginHorizontal: 10
    }
});

const TrackListScreen = ({ navigation }) => {
    const { state, getTracks, deleteTrack } = useContext(TrackContext);

    useEffect(() => {
        const register = async () => {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (status !== 'granted') return;
            const token = await Notifications.getExpoPushTokenAsync();

            console.log(token);
        };

        const listen = ({ origin, data }) => {
            console.log(origin, data);
        };

        register();
        const listener = Notifications.addListener(listen);

        return () => {
            if (listener) Notifications.removeListener(listen);
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <NavigationEvents onWillFocus={getTracks} />
                <VerticalSpacer sm />
                <Text h2 style={styles.title}>
                    Track List
                </Text>
                <VerticalSpacer sm />
                {state ? (
                    <View style={styles.listContainer}>
                        <FlatList
                            data={state}
                            keyExtractor={item => item._id}
                            renderItem={({ item, index }) => (
                                <Swipeout
                                    rowId={item._id}
                                    right={[
                                        {
                                            text: 'Delete',
                                            backgroundColor: '#FD4844',
                                            underlayColor: 'red',
                                            onPress: () => deleteTrack(item._id)
                                        }
                                    ]}
                                    autoClose={true}
                                    backgroundColor="transparent"
                                    close={true}
                                >
                                    <TouchableHighlight
                                        underlayColor="blue"
                                        onPress={() =>
                                            navigation.navigate('TrackDetail', {
                                                _id: item._id,
                                                name: item.name
                                            })
                                        }
                                    >
                                        <ListItem
                                            chevron={true}
                                            title={item.name}
                                            subtitle={new Date(item.locations[0].timestamp)
                                                .toISOString()
                                                .substring(0, 10)}
                                            subtitleStyle={{ color: 'gray', top: 3 }}
                                            bottomDivider
                                        />
                                    </TouchableHighlight>
                                </Swipeout>
                            )}
                        />
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = {
    header: null,
    headerBackTitle: 'Tracks'
};

export default TrackListScreen;
