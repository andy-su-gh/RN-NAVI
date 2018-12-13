import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MineScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '我的',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Mine Screen</Text> */}
            </View>
        );
    }
}
