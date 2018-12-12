import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default class DiscoveryScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Discovery Screen</Text>
                <Button 
                    title='FlatList Demo'
                    onPress={() => {
                        this.props.navigation.navigate('FlatListDemo', {});
                    }}></Button>
            </View>
        );
    }
}
