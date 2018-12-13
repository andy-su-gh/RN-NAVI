import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

export default class DiscoveryScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '发现',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    separaterView = () => {
        return <View style={{height: 10}}></View>
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Discovery Screen</Text> */}
                {this.separaterView()}
                <Button 
                    title='FlatList Demo'
                    onPress={() => {
                        this.props.navigation.push('FlatListDemo', { title: 'FlatList Demo'});
                    }}></Button>
                {this.separaterView()}
                <Button
                    title='PDF Demo'
                    onPress={() => {
                        this.props.navigation.push('PdfDemo', { title: 'PDF DEMO' });
                    }}></Button>
                {this.separaterView()}
                <Button
                    title='Empty Page'
                    onPress={() => {
                        this.props.navigation.push('EmptyPage', { title: 'WHATEVER' });
                    }}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // justifyContent: 'center',
        marginHorizontal: 10,
    },
});
