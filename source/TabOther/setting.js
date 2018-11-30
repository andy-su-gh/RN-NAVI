import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings Screen</Text>
                <Button
                    title='Navigate to Details'
                    onPress={() => {
                        this.props.navigation.navigate('Details', {});
                    }}
                />
                <View style={{ width: 10, height: 10 }}></View>
                <Button
                    title='Push to Details'
                    onPress={() => {
                        this.props.navigation.push('Details', {});
                    }}
                />
                <View style={{ width: 10, height: 10 }}></View>
                <Button
                    title='Navigate to Profile'
                    onPress={() => {
                        this.props.navigation.navigate('Profile', {});
                    }}
                />
                <View style={{ width: 10, height: 10 }}></View>
                <Button
                    title='Push to Profile'
                    onPress={() => {
                        this.props.navigation.push('Profile', {});
                    }}
                />
            </View>
        );
    }
}