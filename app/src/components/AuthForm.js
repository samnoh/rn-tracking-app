import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

import VerticalSpacer from '../components/VerticalSpacer';

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

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordInput = React.createRef();
    const changeFocus = () => passwordInput.current.focus();

    return (
        <>
            <VerticalSpacer xl />
            <VerticalSpacer xl>
                <Text style={styles.title} h3>
                    {headerText}
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
                        returnKeyType="next"
                        onSubmitEditing={changeFocus}
                    />
                    <VerticalSpacer md />
                    <Input
                        ref={passwordInput}
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
                        returnKeyType="send"
                        onSubmitEditing={() => onSubmit({ email, password })}
                    />
                </View>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <VerticalSpacer lg>
                    <Button
                        title={submitButtonText}
                        style={styles.button}
                        onPress={() => onSubmit({ email, password })}
                    />
                </VerticalSpacer>
            </View>
        </>
    );
};

export default AuthForm;
