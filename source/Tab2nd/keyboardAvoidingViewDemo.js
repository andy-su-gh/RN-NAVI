import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';

export default class KeyboardAvoidingViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);

        this.state = {
            value: '0',
            name: '',
            description: '',
            keyboardHight: 250, // iPhone X 竖屏
            scrollViewPositionY: 0,
            kbShowPositionY: 0,
            kbHidePositionY: 0,
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
        },
        headerRight: (<View style={{ width: 40 }}></View>)
    });

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);

        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowListener && this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener && this.keyboardWillHideListener.remove();

        this.keyboardDidShowListener && this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener && this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = (e) => {
        // console.log('keyboardDidShow', e.startCoordinates.height);
        this.setState({
            kbShowPositionY: this.state.scrollViewPositionY,
        });
        this._scrollView.scrollTo({ x: 0, y: this.state.kbShowPositionY + this.state.keyboardHight, animated: true });
    }

    keyboardDidHide = () => {
        this._scrollView.scrollTo({ x: 0, y: this.state.kbShowPositionY, animated: true });
    }



    handleScroll = (event) => {
        let y = event.nativeEvent.contentOffset.y
        // console.log(y);
        this.setState({
            scrollViewPositionY: y,
        });
    }

    getInputItems = () => {
        let views = [];
        let numbersOfInput = 15;
        for (let i = 0; i < numbersOfInput; i++) {
            let item = (
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitleText}>{`输入信息 - ${i}`}</Text>
                    </View>
                    <View style={styles.inputContainer} >
                        <TextInput
                            autoFocus={true}
                            underlineColorAndroid={'transparent'}
                            placeholder={`信息 - ${i}`}
                            style={[styles.inputBox]}
                            onChangeText={(name) => { this.setState({ name }) }}
                        />
                    </View>
                </View>
            );
            views.push(item);
        }
        return (views);
    }

    render() {
        return (
            // <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior='padding'  enabled>
                <View 
                style={styles.container}
                >

                    <ScrollView
                        ref={component => this._scrollView = component}
                        // scrollEnabled={false}
                        // keyboardShouldPersistTaps={true}
                        onScroll={this.handleScroll}
                        scrollEventThrottle={0}
                        style={styles.scrollViewContainer}>
                        <View style={styles.formTitleContainer}>
                            <Text style={styles.titleText}>Scroll View Form</Text>
                        </View>
                        {this.getInputItems()}
                        <View style={{ height: 100, backgroundColor: 'yellow' }} />
                        <View style={{ height: 100, backgroundColor: 'red' }} />
                        <View style={{ height: 55, backgroundColor: 'blue' }} />
                        <View style={{ height: 10, backgroundColor: 'gray' }} />
                    </ScrollView>

                </View>
            // </KeyboardAvoidingView>
        );
    }
}

const sharedStyles = StyleSheet.create({
    mainText: {
        fontSize: 14,
        color: 'orange',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // // marginTop: 25,
        // backgroundColor: 'yellow',
        // borderColor: 'blue',
        // borderWidth: 2
    },
    scrollViewContainer: {
        flex: 1,
        // backgroundColor: 'white',
        borderColor: 'orange',
        borderWidth: 0.5,
        padding: 10,
    },
    formTitleContainer: {
        alignItems: 'center',
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 18,
    },
    sectionContainer: {
        marginTop: 10,
    },
    sectionTitleContainer: {

    },
    // mainText: {
    //     fontSize: 14,
    // },
    hintText: {
        fontSize: 14,
        color: 'gray',
    },
    sectionTitleText: {
        ...sharedStyles.mainText,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CED0CE',
        width: '100%',
        height: 36,
        marginTop: 5,
        // padding: padding.sm,
        // paddingVertical: 3,
        // paddingHorizontal: padding.sm,
        // backgroundColor: '#6611dd',
    },
    inputBox: {
        // marginLeft: padding.sm,
        // marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        width: '100%',
        height: 30,
        fontSize: 14,
        // fontWeight: 'normal',
        // flex: 1,
        // backgroundColor: '#Dd2d'
    },
});
