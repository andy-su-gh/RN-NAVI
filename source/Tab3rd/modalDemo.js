import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Keyboard,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ModalDemo extends Component {

    // 构造
    constructor(props) {
        super(props);

        this.state = {
            value: '0',
            name: '',
            description: '',
            kbShowPositionY: 0, // set 0 is fine for this case. if we have a lot of items from scrollView, we should save the scrollView position on scroll
        }
    }

    static propTypes = {
        // _dialogTitle: PropTypes.string, //标题
        // _value: PropTypes.string, //value
        // _dialogLeftBtnTitle: PropTypes.string, //左按键标题
        // _dialogRightBtnTitle: PropTypes.string, //右按键标题
        // _dialogLeftBtnAction: PropTypes.func.isRequired, //左点击方法
        // _dialogRightBtnAction: PropTypes.func.isRequired, //右点击方法
        // _dialogVisible: PropTypes.bool, //显示还是隐藏
        // _allowNegative: PropTypes.bool, // 是否允许输入负数
    }

    static defaultProps = {
        visible: false,
        supportedOrientations: ['portrait', 'landscape'],
        title: '修改数量',
        leftBtnTitle: '取消',
        rightBtnTitle: '确定',

        // _allowNegative: true,
        // _value: '0',
    }

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowListener && this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener && this.keyboardWillHideListener.remove();
    }

    keyboardDidShow = (e) => {
        console.log('keyboardDidShow', e.startCoordinates.height);
        // this.setState({
        //     kbShowPositionY: this.state.scrollViewPositionY,
        // });
        let offset = 0;

        if (Platform.OS === 'android') {
            offset = e.startCoordinates.height;
        } else {
            offset = e.startCoordinates.height / 2;
        }
        this._scrollView.scrollTo({ x: 0, y: this.state.kbShowPositionY + offset, animated: true });
    }

    keyboardDidHide = () => {
        // if (Platform.OS === 'android') {
            this._scrollView.scrollTo({ x: 0, y: this.state.kbShowPositionY, animated: true });
        // }
    }

    componentDidUpdate(prevProps) {
        // if (this.props._defaultValue !== prevProps._defaultValue) {
        //     this.setState({
        //         value: this.props._defaultValue,
        //     }, () => {
        //         // console.log('NumberInputModal: ', this.props._defaultValue);
        //     });
        // }
    }

    onPressOk = () => {
        // if (!this.state.name.trim()) {
        //     alert('请输入一个合法的名称！');
        //     return;
        // } else {
        this.props.rightBtnAction({
            name: this.state.name,
            description: this.state.description
        });
        // }
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                transparent={true}
                animationType='slide'
                supportedOrientations={this.props.supportedOrientations}
                onRequestClose={() => { }} //如果是Android设备 必须有此方法
            >
                {/* <KeyboardAvoidingView style={styles.container} behavior='padding' enabled keyboardVerticalOffset={-500}> */}
                        <ScrollView contentContainerStyle={styles.container}
                        ref={component => this._scrollView = component}>
                        <View style={{ flex: 1 }}></View>
                        <View style={styles.dialogVisualContainer}>
                            <View style={styles.satdDialogTitleContainer} >
                                <Text style={styles.dialogTitleContent} > {this.props.title} </Text>
                            </View>
                            <View style={[styles.satdDialogInfoMainArea]} >
                                
                                {/* <View style={{ flex: 1, backgroundColor: 'red' }}></View> */}
                                {/* <ScrollView> */}
                                <View style={styles.bcConfirmModalInputContainer} >
                                    <TextInput
                                        ref='numberInputBox'
                                        autoFocus={true}
                                        underlineColorAndroid={'transparent'}
                                        placeholder={'名称'}
                                        style={[styles.bcConfirmModalPasswordInput]}
                                        onChangeText={(name) => { this.setState({ name }) }}
                                    // onSubmitEditing={() => { this.onPressOk(); }}
                                    />
                                </View>
                                
                                <View style={{ height: 5 }}></View>

                                <View style={[styles.bcConfirmModalInputContainer, styles.satdDescriptionInputContainerHeight]} >

                                    <TextInput
                                        ref='numberInputBox'
                                        autoFocus={true}
                                        numberOfLines={4}
                                        multiline={true}
                                        underlineColorAndroid={'transparent'}
                                        placeholder={'备注'}
                                        style={[styles.bcConfirmModalPasswordInput, styles.satdDescriptionInputHeight]}
                                        onChangeText={(description) => { this.setState({ description }) }}
                                    // onSubmitEditing={() => { this.onPressOk(); }}
                                    />
                                </View>
                                {/* </ScrollView> */}
                            </View>

                            <View style={styles.satdDialogBottomContainer} >
                                <TouchableOpacity
                                    style={styles.bcConfirmModalDialogBtnViewItem}
                                    onPress={this.props.leftBtnAction} >

                                    <Text style={styles.bcConfirmModalLeftButton} >  {this.props.leftBtnTitle} </Text>
                                </TouchableOpacity>
                                <View style={styles.bcConfirmModalDialogBtnLineVertical}></View>
                                <TouchableOpacity
                                    style={styles.bcConfirmModalDialogBtnViewItem}
                                    onPress={this.onPressOk} >

                                    <Text style={styles.bcConfirmModalRightButton} > {this.props.rightBtnTitle}  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                </ScrollView>
                        {/* </KeyboardAvoidingView> */}
            </Modal>
        );
    }
}

const colors = {
    alertPrimary: 'rgb(102, 102, 102)', // #666666 rgb
    titleSixth: 'rgb(74,144,226)',
    lineSecondary: 'rgb(225,225,225)',
    borderDefault: '#CED0CE',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52,52,52,0.5)', 
    },
    dialogVisualContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 280,
        height: 300,
        flexDirection: 'column',
    },
    satdDialogTopContainer: {
        flex: 1,
        padding: 20,
        paddingBottom: 10,
    },
    satdDialogBottomContainer: {
        borderTopWidth: 1,
        borderColor: colors.lineSecondary,
        // backgroundColor: '#4444aa',
        flexDirection: 'row',
        height: 43,
        width: '100%',
    },
    dialogTitleContent: {
        textAlign: 'center',
        fontSize: 18,
        color: '#4A4A4A',
    },
    satdDialogInfoMainArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#008888',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    bcConfirmModalInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 1,
        // padding: padding.sm,
        borderColor: colors.borderDefault,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: '100%',
        paddingTop: 3,
        paddingBottom: 3,
        // paddingHorizontal: padding.sm,
        justifyContent: 'center',
        height: 36,
    },
    bcConfirmModalPasswordInput: {
        padding: 0,
        // marginLeft: padding.sm,
        // marginHorizontal: 10,
        paddingHorizontal: 10,
        width: '100%',
        height: 30,
        fontSize: 16,
        // fontWeight: 'normal',
        // flex: 1,
        // backgroundColor: '#6611dd'
    },
    satdDescriptionInputContainerHeight: {
        flex: 1,
    },
    satdDescriptionInputHeight: {
        height: '100%',
    },
    satdDialogTitleContainer: {
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        // backgroundColor: '#099000',
    },
    bcConfirmModalDialogBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#AAAAAA',
        // borderBottomLeftRadius: 8,
        // borderBottomRightRadius: 8,
    },
    bcConfirmModalLeftButton: {
        fontSize: 17,
        borderBottomLeftRadius: 8,
        color: colors.alertPrimary,
    },
    bcConfirmModalRightButton: {
        fontSize: 17,
        borderBottomRightRadius: 8,
        color: colors.titleSixth,
    },
    bcConfirmModalDialogBtnLineVertical: {
        width: 1,
        backgroundColor: colors.lineSecondary,
    },
});
