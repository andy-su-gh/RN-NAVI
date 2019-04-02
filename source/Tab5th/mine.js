import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import Icons from 'res/Icons';

const VIEWABILITY_CONFIG = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};

const dimensions = {
    fullHeight: Dimensions
        .get('window')
        .height,
    fullWidth: Dimensions
        .get('window')
        .width,
};

const Paddings = {
    normal: 5,
    sm: 10,
    md: 20,
};

const Colors = {
    transparent: 'transparent',
    black: 'rgb(0, 0, 0)',
    white: '#FFFFFF',
    app: {
        tint: '#F4ABB3',
        primary: '#F4ABB3',
        secondary: '#F4EBEC',
        loadingBg: 'rgba(180,180,180,0.68)',
        dialogBg: 'rgba(244, 171, 179,0.8)',
    },
    box: {
        titlePrimary: '#F4ABB3',
        titleSecondary: '#E5818C',
        titleTertiary: '#F9BFC6',
        titleFourthly: '#363636',
        // titleFifth: 'rgb(80,88,93)',
        // titleSixth: 'rgb(74,144,226)',
        backgroundPrimary: '#F4ABB3',
        backgroundSecondary: '#F4EBEC',
        primary: '#2B2B2B',
        secondary: '#4D4D4D',
        explain: '#929292',

        linePrimary: '#DCDCDC',
    },
    mine: {
        backgroundPrimary: '#dadada',
        titlePrimary: '#C2B7B9',
        titleSecondary: '#D4D1D1',
    },
    care: {
        primary: '#F4ABB3',
        secondary: '#F3D2D5',
        titlePrimary: '#818181',
    },
};

const Sizes = {
    alert: 10,
    explain: 12,
    primary: 14,
    secondary: 13,
    title: 16,
    topHeader: 18,
    marker: 20,
    large: 22,
    larger: 24,
    obvious: 26,
    huge: 32,
    nomore: 68,
};

export default class MineScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '我的',
        headerTitleStyle: {
            // color: 'green',
            textAlign: 'center',
            flex: 1,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
          myNickName: '',
          myAccount: '',
          menuItems: [],
          virtualized: false,
        };
      }

    componentDidMount() {
        this.initData();
        // this.loadDemoData();
    }

    initData = () => {
        const menuItems = [
            {
                key: '0',
                title: 'section one',
                data: [
                    { key: '0', title: '我的订单', icon: 'icon_my_order_list', action: 'myOrder', },
                    { key: '1', title: '我的优惠券', icon: 'icon_my_coupon', action: 'myCoupon', },
                    { key: '2', title: '我的关爱', icon: 'icon_my_care', action: 'myCare', },
                    { key: '3', title: '帮助', icon: 'icon_help', action: 'help', },
                    { key: '4', title: '关于', icon: 'icon_version', action: 'about', },
                ],
            },
            {
                key: '1',
                title: 'section two',
                data: [
                    // { key: '0', title: '帮助', icon: 'icon_help', action: 'help', },
                    // { key: '1', title: '关于', icon: 'icon_version', action: 'about', },
                ],
            },
            // {
            //   key: '2',
            //   title: 'section three',
            //   data: [
            //     { key: '0', title: 'Item In Header Section', icon: 'Section s1', },
            //     { key: '1', title: 'Item In Header Section', icon: 'Section s1', },
            //   ],
            // },
        ];
        this.setState({ menuItems, });
    }

    onPressSetting = () => {
        alert('Setting');
    }
    
    onPressItem = (item) => {
        const { navigation, } = this.props;
        switch (item.action) {
            // case 'myOrder': {
            //     navigation.navigate('MyOrderListPage', {});
            //     break;
            // }
            // case 'myCoupon': {
            //     navigation.navigate('MyCouponListPage', {});
            //     break;
            // }
            default: {
                alert(item.title);
            }
        }
    }

    renderItemComponent = ({ item, index, }) => {
        // console.log('renderItemComponent', item, index);
        return (
            <TouchableOpacity
                style={styles.sectionItemContainer}
                key={item.key}
                onPress={() => this.onPressItem(item)}
            >
                <Image style={styles.sectionItemIcon} source={Icons.mine[item.icon]} />
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionItemTitle}>{item.title}</Text>
                </View>
                <Image style={styles.sectionItemArrowIcon} source={Icons.mine.icon_arrows_pink_r} />
            </TouchableOpacity>
        );
    }

    ItemSeparatorComponent = () => <View style={styles.itemSeparatorContainer} />

    // SectionSeparatorComponent = () => <View style={styles.sectionSeparatorContainer} />

    SectionSeparatorComponent = (section) => {
        // console.log('SectionSeparatorComponent', section);
        return <View style={styles.sectionSeparatorContainer} />;
    }


    onViewableItemsChanged = () => {
        alert('onViewableItemsChanged :P');
    }

    buildMyMenuView = () => {
        const { menuItems, virtualized, } = this.state;
        return (
            <View style={styles.myMenuContainer}>
                <SectionList
                    sections={menuItems}
                    // ListHeaderComponent={this.listHeaderComponent}
                    // renderSectionHeader={this.renderSectionHeader}
                    renderItem={this.renderItemComponent}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    SectionSeparatorComponent={this.SectionSeparatorComponent}
                    // ListFooterComponent={this.listFooterComponent}

                    enableVirtualization={virtualized}
                    // onRefresh={() => alert('onRefresh: nothing to refresh :P')}
                    // onViewableItemsChanged={this.onViewableItemsChanged}
                    // refreshing={false}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                {this.buildMyMenuView()}
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
    bannerContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullWidth * 367 / 720,
      // resizeMode: 'repeat',
    },
    myInfoContainer: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: 'pink',
      // marginTop: -20,
      paddingTop: Paddings.normal,
    },
    myIconContainer: {
      width: 80,
      height: 80,
    },
    myAccountContainer: {
      // backgroundColor: 'yellow',
      marginTop: Paddings.sm,
    },
    myInfoText: {
      color: Colors.white,
      fontSize: Sizes.explain,
    },
    settingContainer: {
      alignItems: 'flex-end',
      // justifyContent: 'flex-end',
      padding: Paddings.sm,
      paddingBottom: 0,
    },
    myIconSetting: {
      width: 20,
      height: 20,
    },
    myMenuContainer: {
      paddingHorizontal: Paddings.md,
      paddingVertical: Paddings.sm,
    },
    sectionHeaderContainer: {
      height: Paddings.sm,
      // backgroundColor: 'yellow',
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: Colors.box.linePrimary,
    },
    sectionFirstHeaderContainer: {
      borderTopWidth: 0,
    },
    sectionSeparatorContainer: {
      height: Paddings.normal,
      // backgroundColor: Colors.mine.backgroundPrimary,
      // backgroundColor: 'pink',
    },
    itemSeparatorContainer: {
      height: 0.5,
      backgroundColor: Colors.box.linePrimary,
    },
    sectionItemContainer: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Paddings.normal,
    },
    sectionItemIcon: {
      height: 20,
      width: 20,
    },
    sectionTitleContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: Paddings.normal,
    },
    sectionItemTitle: {
      fontSize: Sizes.primary,
      color: Colors.box.titleFourthly,
    },
    sectionItemArrowIcon: {
      height: 8,
      width: 8,
    },
  });
