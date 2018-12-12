import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default class DiscoveryScreen extends Component {
    separaterView = () => {
        return <View style={{height: 10}}></View>
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Discovery Screen</Text>
                {this.separaterView()}
                <Button 
                    title='FlatList Demo'
                    onPress={() => {
                        this.props.navigation.navigate('FlatListDemo', {});
                    }}></Button>
                {this.separaterView()}
                <Button
                    title='Empty Page'
                    onPress={() => {
                        this.props.navigation.push('EmptyPage', {});
                    }}></Button>
            </View>
        );
    }
}
