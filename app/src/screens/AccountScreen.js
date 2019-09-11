import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';

import VerticalSpacer from '../components/VerticalSpacer';
import { Context as AuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    avatar: {
        alignSelf: 'flex-end',
        marginRight: 20,
        top: -50
    },
    bottom: {
        width: '85%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 30
    }
});

const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext);
    const name = state.token && jwtDecode(state.token).email;

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <VerticalSpacer sm />
            <Text h2 style={styles.title}>
                Account
            </Text>
            <View style={styles.avatar}>
                <Avatar rounded title={name.substring(0, 2)} size="medium" />
            </View>
            <View style={styles.bottom}>
                <Button
                    title="Sign Out"
                    onPress={signout}
                    buttonStyle={{ backgroundColor: '#BC4B45' }}
                />
            </View>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Ionicons name="ios-settings" size={25} color="gray" style={{ top: 2 }} />
};

export default AccountScreen;
