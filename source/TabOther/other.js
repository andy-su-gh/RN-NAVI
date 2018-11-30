import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class OtherScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Other Screen</Text>
            </View>
        );
    }
}