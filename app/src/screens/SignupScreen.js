import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        height: '100%'
    }
});

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);

    return (
        <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign Up"
            />
            <NavLink routeName="Signin" text="Already have an account? Sign in" />
        </ScrollView>
    );
};

SignupScreen.navigationOptions = () => ({
    header: null
});

export default SignupScreen;
