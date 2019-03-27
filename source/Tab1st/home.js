import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        };
    }

    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    componentDidMount() {
        const { region, } = this.getInitialState();
        this.setState({
            region
        })
    }

    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        // this.setState({ region });
    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                region={this.state.region}
                showsUserLocation={true}
                onRegionChange={this.onRegionChange}
            />
        );
    }
}
