import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    NavigationEvents
} from 'react-navigation'; // Version can be specified in package.json
 
export default class DetailsScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                />
                <View style={{ backgroundColor: 'yellow' }}>
                    <View style={{ backgroundColor: 'red' }}>
                        <Button
                            title='Go to Home'
                            onPress={() => {
                                this.props.navigation.navigate('Home', {});
                            }}
                        ></Button>
                        <View style={{ width: 10, height: 10 }}></View>
                        <Button
                            title='Go to Home'
                            onPress={() => {
                                this.props.navigation.navigate('Home', {});
                            }}
                        ></Button>
                    </View>
                    <View style={{ width: 10, height: 10 }}></View>
                    <View style={{ backgroundColor: 'gray' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                title='Go to Details... again'
                                onPress={() => {
                                    this.props.navigation.push('Details', {});
                                }}
                            ></Button>
                            <View style={{ width: 10, height: 10 }}></View>
                            <Button
                                title='Go Back'
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            ></Button>
                            <View style={{ width: 10, height: 10 }}></View>
                            <Button
                                title='返回'
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}
                            ></Button>
                        </View>
                    </View>
                </View>
            </View>
        )

    }
}