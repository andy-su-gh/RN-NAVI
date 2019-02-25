import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import ModalDialog from './modalDemo';

export default class NewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '新建',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
            showModalDialog: false,
            result: {name: 'NAME', description: 'DESCRIPTION'},
            title: '这是对话框的标题',
        }
    }

    showModalDialog = (status) => {
        this.setState({
            showModalDialog: status,
        }, () => {
            // alert(this.state.showModalDialog);
        });
    }

    saveAsTemplate = (result) => {
        this.setState({ result }, () => {
            this.showModalDialog(false);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Create New Screen</Text> */}
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => { this.showModalDialog(true) }}
                >
                    <Text>Modal Demo</Text>
                </TouchableOpacity>
                <View style={{height: 15}}></View>

                <Text style={styles.resultInfoText}>Modal Dialog Reture Value</Text>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultInfoText}>{`Name: `}
                        <Text style={styles.resultValueText}>{this.state.result && this.state.result.name || ''}</Text>
                    </Text>
                    <Text style={styles.resultInfoText}>{'Description: '}
                        <Text style={styles.resultValueText}>{this.state.result && this.state.result.description || ''}</Text>
                    </Text>
                </View>

                <ModalDialog
                    visible={this.state.showModalDialog}
                    title={this.state.title}
                    leftBtnTitle={'Cancel'}
                    rightBtnTitle={'OK'}
                    leftBtnAction={() => { this.showModalDialog(false); }}
                    rightBtnAction={(result) => { this.saveAsTemplate(result); }}
                    // // _allowNegative={false}
                    // // supportedOrientations: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']
                    // supportedOrientations={['landscape']} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center', 
        // justifyContent: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'orange',
        borderRadius: 5,
        height: 30,
        width: '100%',
    },
    resultContainer: {
        marginTop: 5,
        width: '100%',
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
    },
    resultInfoText: {
        color: 'gray',
        // fontSize: 16,
    },
    resultValueText: {
        color: 'black',
        fontSize: 14,
    }
});
