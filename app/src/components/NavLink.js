import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import VerticalSpacer from '../components/VerticalSpacer';

const styles = StyleSheet.create({
    link: {
        color: '#5588D0',
        textAlign: 'center'
    }
});

const NavLink = ({ navigation, routeName, text }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

export default withNavigation(NavLink);
