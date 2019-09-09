import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        height: '100%'
    }
});

const SigninScreen = () => {
    return (
        <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage=""
                onSubmit={() => {}}
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
