import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    xl: {
        marginVertical: 60
    },
    lg: {
        marginVertical: 40
    },
    md: {
        marginVertical: 20
    },
    sm: {
        marginVertical: 10
    },
    xs: {
        marginVertical: 5
    }
});

const VerticalSpacer = ({ children, xl, lg, md, sm, xs }) => {
    return (
        <View
            style={
                xl
                    ? styles.xl
                    : lg
                    ? styles.lg
                    : md
                    ? styles.md
                    : sm
                    ? styles.sm
                    : xs
                    ? styles.xs
                    : null
            }
        >
            {children}
        </View>
    );
};

export default VerticalSpacer;
