import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Home Screen</Text> */}
                {/* <Button
                    title="Go to Details"
                    onPress={() => {
                        // this.props.navigation.dispatch(StackActions.reset({
                        //   index: 0,
                        //   actions: [
                        //     NavigationActions.navigate({ routeName: 'Details', name: 'Child Route' })
                        //   ],
                        // }))
                        this.props.navigation.navigate(
                            'Details',
                            {},
                        );
                    }}
                /> */}
            </View>
        );
    }
}
