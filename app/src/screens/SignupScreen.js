import React, { useState, useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import VerticalSpacer from '../components/VerticalSpacer';
import { Context as AuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainer: {
        marginHorizontal: 5
    },
    inputIcon: {
        marginLeft: 0,
        marginRight: 10
    },
    inputLabel: {
        color: '#5588D0'
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 16,
        color: '#BC4B45',
        textAlign: 'center'
    },
    button: {
        marginHorizontal: 30
    }
});

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signup } = useContext(AuthContext);

    return (
        <ScrollView scrollEnabled={false}>
            <VerticalSpacer xl />
            <VerticalSpacer xl>
                <Text style={styles.title} h3>
                    Sign up for Tracker
                </Text>
            </VerticalSpacer>
            <VerticalSpacer md />
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="email@address.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        label="Email Address"
                        labelStyle={styles.inputLabel}
                        leftIcon={{ type: 'MaterialIcons', name: 'email', color: '#DDD' }}
                        leftIconContainerStyle={styles.inputIcon}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <VerticalSpacer md />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        label="Password"
                        labelStyle={styles.inputLabel}
                        leftIcon={{
                            type: 'AntDesign',
                            name: 'lock',
                            color: '#DDD'
                        }}
                        leftIconContainerStyle={styles.inputIcon}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                {state.errorMessage ? (
                    <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                ) : null}
                <VerticalSpacer lg>
                    <Button
                        title="Sign Up"
                        style={styles.button}
                        onPress={() => signup({ email, password })}
                    />
                </VerticalSpacer>
            </View>
        </ScrollView>
    );
};

SignupScreen.navigationOptions = () => ({
    header: null
});

export default SignupScreen;
