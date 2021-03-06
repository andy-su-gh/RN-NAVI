import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet, ScrollView, FlatList, ImageBackground, TouchableOpacity, } from 'react-native';
// import { TabView, SceneMap, } from 'react-native-tab-view';
// import Animated from 'react-native-reanimated';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

const dimensions = {
    fullHeight: Dimensions
        .get('window')
        .height,
    fullWidth: Dimensions
        .get('window')
        .width,
};

export default class MessageScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '消息',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
            couponYetList: [],
            couponList: [],
            couponExpiredList: [],
            // index, routers used by <TabView />
            index: 0,
            routes: [
                { key: 'first', title: '待领取' },
                { key: 'second', title: '已领取' },
                { key: 'third', title: '已过期' },
            ],
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        const couponYetList = [
            {
                key: '0',
                id: '12',
                title: '满 200 元可用',
                type: '', // 直减，N折
                value: 20, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01',
            },
            {
                key: '1',
                id: '23',
                title: '满 500 元可用',
                type: '', // 直减，N折
                value: 100, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
            {
                key: '2',
                id: 'asdfasdfasdf',
                title: '满 5 元可用',
                type: '', // 直减，N折
                value: 5, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
            {
                key: '3',
                id: 'asdfasdfasdf',
                title: '满 5000 元可用',
                type: '', // 直减，N折
                value: 500, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
            {
                key: '4',
                id: 'asdfasdfasdf',
                title: '满 5 元可用',
                type: '', // 直减，N折
                value: 5, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
        ];

        const couponList = [
            {
                key: '0',
                id: '12',
                title: '满 2 元可用',
                type: '', // 直减，N折
                value: 2, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01',
            },
            {
                key: '1',
                id: '23',
                title: '满 5 元可用',
                type: '', // 直减，N折
                value: 5, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
            {
                key: '2',
                id: 'asdfasdfasdf',
                title: '满 5 元可用',
                type: '', // 直减，N折
                value: 5, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
        ];

        const couponExpiredList = [
            {
                key: '0',
                id: '12',
                title: '满 2 元可用',
                type: '', // 直减，N折
                value: 2, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01',
            },
            {
                key: '1',
                id: '23',
                title: '满 5 元可用',
                type: '', // 直减，N折
                value: 5, // 直减2元，2折
                validityPeriod: '2019/03/01 - 2019/10/01', // 2019/03/01 00:00:00
            },
        ];

        this.setState({ couponYetList, couponList, couponExpiredList, });
    }

    renderSeparator = () => <View style={styles.renderItemSeparator} />;

    emptyComponent = () => null

    renderHeader = () => {
        return null;
    }

    renderFooter = () => null

    onScrolled = () => null

    handleRefresh = () => null

    onEndReached = () => null  

    onPressCouponAction = (element) => {
        // alert(element.title);
        let { couponList, } = this.state;
        couponList.push(element);
        this.setState({ couponList, });
    }

    renderItem = ({ item, }, key,) => {
        const { index, } = this.state;
        const element = item;
        console.log('renderItem', index, element, key);
        return (
            <TouchableOpacity
                key={element.id}
                style={styles.couponItemContainer}
                onPress={() => { this.onPressCouponAction(element); }}
            >
                <ImageBackground
                    style={[styles.couponItemBgImage, key==='expired' ? {backgroundColor: 'gray'} : {backgroundColor: 'orange'}]}
                    // source={
                    //     index === 2
                    //         ? Icons.mine.bg_coupon_gray
                    //         : Icons.mine.bg_coupon_pink
                    // }
                >
                    {/* <View style={{ paddingHorizontal: 5, }}>
                        <Text style={styles.couponCurrencySymbolText}>¥
                  <Text style={styles.couponValueText}>{element.value}</Text>
                        </Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.couponTitleText}>{element.title}</Text>
                        <Text style={styles.couponValidityPeriodText}>{`有效期至 ${element.validityPeriod}`}</Text>
                    </View> */}
                    <View style={styles.couponItemContainer}>
                        <View style={styles.couponItemValueContainer}>
                            <Text style={[styles.couponValueText, key === 'expired' ? styles.grayText : {},]}>{element.value}</Text>
                            <View style={[styles.couponCurrencySymbolCircle, key === 'expired' ? styles.grayBackground : {},]}>
                                <Text style={styles.couponCurrencySymbolText}>¥</Text>
                            </View>
                        </View>
                        <View style={styles.couponItemInfoContainer}>
                            <Text style={[styles.couponTitleText, key === 'expired' ? styles.grayText : {},]}>{element.title}</Text>
                            <Text style={styles.couponValidityPeriodText}>{`有效期 ${element.validityPeriod}`}</Text>
                        </View>
                        <View style={[styles.couponItemActionContainer, key === 'yet' ? {} : { padding: 0, },]}>
                            <Text style={styles.couponItemActionText}>
                                {this.getActionDisplayText(key)}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>

            </TouchableOpacity>
        );
    }

    getActionDisplayText = (key) => {
        let text = '';
        switch (key) {
          case 'expired': {
            text = '已过期';
            break;
          }
          case 'yet': {
            text = '立即领取';
            break;
          }
          default: {
            text = '已领取';
          }
        }
        return text;
      }

    buildFlatList = (dataSource, refreshing, key = 'default') => {
        return (
            <FlatList
                extraData={this.state}
                data={dataSource}
                keyExtractor={this.keyExtractor}
                renderItem={item => this.renderItem(item, key)}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent={this.emptyComponent}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                // onScroll={this.onScrolled}
                // onRefresh={this.handleRefresh}
                // refreshing={refreshing}
                // onEndReached={this.onEndReached}
                onEndReachedThreshold={0.5}
            />
        );
    }

    couponYetRoute = () => {
        const { couponYetList, refreshing, } = this.state;
        return (
            <View style={[styles.container, {},]}>
                {this.buildFlatList(couponYetList, refreshing, 'yet')}
            </View>
        );
    }

    couponRoute = () => {
        const { couponList, refreshing, } = this.state;
        return (
            <View style={[styles.container, {},]}>
                {this.buildFlatList(couponList, refreshing,)}
            </View>
        );
    }

    couponExpiredRoute = () => {
        const { couponExpiredList, refreshing, } = this.state;
        return (
            <View style={[styles.container, {},]}>
                {this.buildFlatList(couponExpiredList, refreshing, 'expired')}
            </View>
        );
    }

    renderTabBar = props => (
        <View style={styles.tabbar}>
            {
                props.navigationState.routes.map((route, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            onPress={() => props.jumpTo(route.key)}
                        >
                            {this.renderTabItem(props)({ route, index, })}
                        </TouchableWithoutFeedback>
                    );
                })
            }
        </View>
    )

    renderTabItem = ({ navigationState, position, }) => ({ route, index, }) => {
        const inputRange = navigationState.routes.map((x, i) => i);

        const activeOpacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });
        const inactiveOpacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 0 : 1)),
        });

        // console.log('inputRange', inputRange);
        // console.log('position', position);
        // console.log('route', route);
        // console.log('index', index);
        // console.log('activeOpacity', activeOpacity);
        // console.log('inactiveOpacity', inactiveOpacity);

        return (
            <View style={styles.tab}>
                <View style={styles.tabItemTextContainer}>
                    <Text style={[styles.label, styles.inactive,]}>{route.title}</Text>
                </View>
                <View style={styles.tabActiveItemIndicatorContainer}>
                    <Animated.View style={[styles.item, { opacity: activeOpacity, }, styles.activeItem,]} />
                </View>
                {/* <Animated.View
              style={[styles.item, { opacity: inactiveOpacity, }, ]}
              // style={[styles.item, ]}
            >
              <Text style={[styles.label, styles.inactive, ]}>{route.title}</Text>
            </Animated.View>
            <Animated.View
              style={[styles.item, { opacity: activeOpacity, }, styles.activeItem, ]}
              // style={[styles.item, styles.activeItem, ]}
            >
              <Text style={[styles.label, styles.active, ]}>{route.title}</Text>
              <View style={{ height: 10, width: '100%', backgroundColor: 'white', }} />
            </Animated.View> */}
            </View>
        );
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Message Screen</Text> */}
                {/* <TabView
                    navigationState={this.state}
                    renderScene={
                        SceneMap({
                            first: this.couponYetRoute,
                            second: this.couponRoute,
                            third: this.couponExpiredRoute,
                        })
                    }
                    renderTabBar={this.renderTabBar}
                    onIndexChange={index => this.setState({ index, })}
                    initialLayout={{ width: dimensions.fullWidth, }}
                /> */}
                <ScrollableTabView
                    style={{ marginTop: 0, }}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar backgroundColor={"orange"}
                        activeTextColor={"white"}
                        inactiveTextColor={"#E2E2E2"}
                        underlineStyle={{height: 3,
                            backgroundColor: 'white',}}
                        style={{borderWidth: 0}}
                        />}
                >
                    {/* <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2 word word'>favorite</Text>
                    <Text tabLabel='Tab #3 word word word'>project</Text>
                    <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                    <Text tabLabel='Tab #5'>project</Text> */}
                    <View tabLabel="待领取" style={styles.tabView}>
                        {this.couponYetRoute()}
                    </View>
                    <ScrollView tabLabel="已领取" style={styles.tabView}>
                        {this.couponRoute()}
                    </ScrollView>
                    <ScrollView tabLabel="已过期" style={styles.tabView}>
                        {this.couponExpiredRoute()}
                    </ScrollView>
                    {/* <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Notifications</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-list" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Other nav</Text>
                        </View>
                    </ScrollView> */}
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    couponItemBgImage: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    renderItemSeparator: {
        height: 10,
    },
    couponValueText: {
        fontSize: 46,
        color: 'white',
        // fontWeight: 'bold',
    },
    couponItemContainer: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 12,
        flex: 1,
    },
    couponItemValueContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        // opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        // paddingTop: 10,
        width: 120,
      },
      couponCurrencySymbolCircle: {
        backgroundColor: 'white',
        borderRadius: 9,
        height: 18,
        width: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -12,
      },
      grayBackground: {
        backgroundColor: 'white',
      },
      couponCurrencySymbolText: {
        fontSize: 15,
        color: 'orange',
      },
      couponItemInfoContainer: {
        flex: 1,
        // backgroundColor: 'green',
        // opacity: 0.5,
        justifyContent: 'center',
      },
      couponTitleText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
      },
      couponValidityPeriodText: {
        fontSize: 8,
        color: 'white',
      },
      couponItemActionContainer: {
        width: 60,
        // backgroundColor: 'blue',
        // opacity: 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      couponItemActionText: {
        fontSize: 18,
        color: 'white',
      },
});
