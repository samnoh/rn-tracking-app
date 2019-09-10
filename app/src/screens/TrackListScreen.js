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
                            <TouchableOpacity>
                                <ListItem chevron={true} title={item.name} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = {
    header: null
};

export default TrackListScreen;
