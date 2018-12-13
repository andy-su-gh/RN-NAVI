import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MessageScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '消息',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Message Screen</Text> */}
            </View>
        );
    }
}
