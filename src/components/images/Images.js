import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions, Button } from 'react-native';
import { getImages } from '../../actions/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DeviceWidth = Dimensions.get('window').width;

export class Images extends Component {
    componentDidMount() {
        this.props.getImages();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.imageWrapper}>
                    {this.props.images.map((item, index) => (
                        <TouchableOpacity key={index + 1} onPress={() => this.props.navigation.navigate('Image', item)} style={{ width: DeviceWidth * 0.5, position: "relative" }}>
                            <Image
                                style={((index + 1) % 2 === 0 ? styles.imageRight : styles.imageLeft)}
                                source={{
                                    uri: `${item.urls.thumb}`
                                }}
                            />
                            <View style={styles.description}>
                                <Text style={styles.descriptionText}>{item.user.name}</Text>
                                <Text style={styles.descriptionText}>{item.user.username}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    imageLeft: {
        width: "100%",
        height: 150
    },
    imageRight: {
        width: "100%",
        height: 150
    },
    description: {
        position: "absolute",
        padding: 8,
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(1, 1, 1, 0.2)"
    },
    descriptionText: {
        color: "#ffffff"
    }
});

const mapStateToProps = state => ({
    images: state.images.images
})

export default connect(mapStateToProps, { getImages })(Images);
