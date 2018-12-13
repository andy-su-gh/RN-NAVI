import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

export default class PdfDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
        },
        headerRight: (<View style={{ width: 40 }}></View>)
    });


    render() {
        const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
    }
});
