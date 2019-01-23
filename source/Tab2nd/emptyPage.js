import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import dateFormat from 'dateformat';

export default class EmptyPage extends Component {
    constructor(props) {
        super(props);
        this.now = new Date();
        this.state = {
            startTime: '',
            endTime: '',
            isDateTimePickerVisible: false,
            minuteInterval: 30,
            isSetStartTime: true,
            datetimePickerMode: 'time', // date, time, datetime
            datetimePickerTitleIOS: '',
            timeStr: '00:00',
            dateStr: '1999/01/01',
            datetimeStr: '1999/01/01 00:00',
        };
    }

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
    
    formatShortTimeNoSeconds(date) {
        return dateFormat(date, "HH:mm");
    }
    
    formateShortDate(date) {
        return dateFormat(date, 'yyyy/mm/dd')
    }
    
    formatLongDate(date) {
        return dateFormat(date, "yyyy/mm/dd HH:MM:ss");
    }

    onPressStartDatetime = (mode) => {
        let titleIOS = '选择日期时间';
        switch(mode){
            case 'time': {
                titleIOS = '选择时间';
            }break;
            case 'date': {
                titleIOS = '选择日期';
            }break;
            default: {}
        }
        this.setState({
            datetimePickerMode: mode,
            datetimePickerTitleIOS: titleIOS,
        }, () => {
            this._showDateTimePicker();
        })
    }

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date, this.state.minInterval);
        // let pickedDate = new Date(date);
        // if (this.state.isSetStartTime) {
        //     this.setState({ startTime: this.formatShortTimeNoSeconds(date) });
        // } else {
        //     this.setState({ endTime: this.formatShortTimeNoSeconds(date) });
        // }
        // switch(this.state.datetimePickerMode){
        //     case 'time': {
        //         this.setState({ timeStr: this.formatShortTimeNoSeconds(date) });
        //     }break;
        //     case 'date': {
        //         this.setState({ dateStr: this.formateShortDate(date) });
        //     }break;
        //     default: {}
        // }
        this.setState({
            timeStr: this.formatShortTimeNoSeconds(date),
            dateStr: this.formateShortDate(date),
            datetimeStr: this.formatLongDate(date),
        })
        this._hideDateTimePicker();

    };

    _hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
        setTimeout(() => this.setState({ minuteInterval: 1 }), 300);
    };

    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
        setTimeout(() => this.setState({ minuteInterval: 30 }), 10);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 18 }}>Time</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1 }}>Selected Time: </Text>
                        <TouchableOpacity onPress={() => { this.onPressStartDatetime('time') }} style={styles.touchableContainer}>
                            <Text>{this.state.timeStr}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 18 }}>Date</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1 }}>Selected Date: </Text>
                        <TouchableOpacity onPress={() => { this.onPressStartDatetime('date') }} style={styles.touchableContainer}>
                            <Text>{this.state.dateStr}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={{ fontSize: 18 }}>Datetime</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1 }}>Selected Datetime: </Text>
                        <TouchableOpacity onPress={() => { this.onPressStartDatetime('datetime') }} style={styles.touchableContainer}>
                            <Text>{this.state.datetimeStr}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    this.state.minuteInterval !== 1 && <DateTimePicker
                        // maximumDate={new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate())}
                        // locale={DeviceInfo.getDeviceLocale()}
                        mode={this.state.datetimePickerMode}
                        titleIOS={this.state.datetimePickerTitleIOS}
                        cancelTextIOS={'取消'}
                        confirmTextIOS={'确认'}
                        is24Hour={true}
                        minuteInterval={this.state.minuteInterval}
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker} />
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgb(244, 244, 244)',
        backgroundColor: 'rgb(234, 234, 234)',
    },
    sectionContainer: {
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
    },
    touchableContainer: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        padding: 3,
    }
});
