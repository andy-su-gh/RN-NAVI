import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class EmptyPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
        headerStyle: {
            // backgroundColor: 'white',
            // borderColor: 'red',
            // borderWidth: 1
            // alignItems no effect on headerStyle
            // alignItems: 'center',
        },
        // headerLeft: (<View></View>),
        headerRight: (<View style={{ width: 40 }}></View>)
    });


    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
});
