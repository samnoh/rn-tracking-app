import React, { useContext } from 'react';
import {
    ScrollView,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Button,
    StyleSheet
} from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Swipeout from 'react-native-swipeout';

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
    const { state, getTracks } = useContext(TrackContext);

    const swipeoutBtns = [
        {
            text: 'Delete',
            backgroundColor: '#FD4844',
            underlayColor: 'red',
            type: 'delete',
            onPress: () => console.log('delete')
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <NavigationEvents onWillFocus={getTracks} />
                <VerticalSpacer sm />
                <Text h2 style={styles.title}>
                    Track List
                </Text>
                <VerticalSpacer md />
                <View style={styles.listContainer}>
                    <FlatList
                        data={state}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <Swipeout
                                right={swipeoutBtns}
                                sensitivity={90}
                                backgroundColor="transparent"
                            >
                                <TouchableOpacity
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
                                </TouchableOpacity>
                            </Swipeout>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = {
    header: null,
    headerBackTitle: 'Tracks'
};

export default TrackListScreen;
