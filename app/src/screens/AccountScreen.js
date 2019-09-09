import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import jwtDecode from 'jwt-decode';

import VerticalSpacer from '../components/VerticalSpacer';
import { Context as AuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    info: {
        fontSize: 18,
        marginHorizontal: 30
    },
    button: {
        marginHorizontal: 30
    }
});

const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <VerticalSpacer xl>
                <Text style={styles.title} h3>
                    Account
                </Text>
            </VerticalSpacer>
            <VerticalSpacer xl />
            <View>
                <Text style={styles.info}>
                    Email: {state.token && jwtDecode(state.token).email}
                </Text>
                <VerticalSpacer sm />
                <Button style={styles.button} title="Sign Out" onPress={signout} />
            </View>
        </SafeAreaView>
    );
};

export default AccountScreen;
