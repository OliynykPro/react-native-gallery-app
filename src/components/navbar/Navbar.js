import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        paddingBottom: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#778beb',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500',
    }
})