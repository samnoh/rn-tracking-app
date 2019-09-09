import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        height: '100%'
    }
});

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink routeName="Signup" text="Don't have an account? Sign up" />
        </ScrollView>
    );
};

SigninScreen.navigationOptions = () => ({
    header: null
});

export default SigninScreen;
