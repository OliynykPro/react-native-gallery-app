import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet } from 'react-native';

export class ImagePage extends Component {

    render() {
        return (
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: `${this.props.route.params.urls.regular}`
                    }}
                    style={styles.image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageWrapper: {
        flex: 1,
        padding: 10,
    },
    image: {
        flex: 1,
        borderRadius: 8
    }
})

export default ImagePage
