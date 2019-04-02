import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icons from 'res/Icons';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const Paddings = {
  normal: 5,
};

const Colors = {
  box: {
    linePrimary: '#DCDCDC',
  },
};

export default class SectionListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOnOptions: [],
      menuItems: [],
      virtualized: false,
    };
    this.onDayPress = this.onDayPress.bind(this);
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

  componentDidMount() {
    this.initData();
    // this.doMockup();
  }
  
  initData = () => {
    const menuItems = [
      {
        key: '0',
        title: 'section one',
        data: [
          { key: '0', title: '开始', icon: 'icon_love_myself1', type: 'switch', value: false, bindState: 'dayStatus1_start', },
          { key: '1', title: '结束', icon: 'icon_love_myself2', type: 'switch', value: false, bindState: 'dayStatus2_end', },
          { key: '2', title: '疼痛等级', icon: 'icon_love_myself3', type: 'level', levelIcon: {on: 'icon_love_myself9_lit', off: 'icon_love_myself9',}, value: 2, },
          { key: '3', title: '使用盒子', icon: 'icon_love_myself4', type: 'switch', value: false, },
          { key: '4', title: '盒子效果', icon: 'icon_love_myself7', type: 'level', levelIcon: {on: 'icon_love_myself8_lit', off: 'icon_love_myself8',}, value: 3, },
          { key: '5', title: '使用设备', icon: 'icon_love_myself6', type: 'switch', },
          { key: '6', title: '设备效果', icon: 'icon_love_myself7', type: 'level', levelIcon: {on: 'icon_love_myself8_lit', off: 'icon_love_myself8',}, value: 0, },
        ],
      },
    ];

    const turnOnOptions = [];
    // const item0 = menuItems[0];
    const { data, } = menuItems[0];
    turnOnOptions.push(data[1]);
    turnOnOptions.push(data[3]);
    turnOnOptions.push(data[5]);
    this.setState({ menuItems, turnOnOptions, });
  }
  
  ItemSeparatorComponent = () => <View style={{ height: 0.5, backgroundColor: Colors.box.linePrimary, }} />

  keyExtractor = item => item.key;

  renderItemComponent = ({ item, index, }) => {
    console.log('renderItemComponent', item.key, index);
    return (
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
        key={item.key}
      >
        <Image style={{ height: 20, width: 20, }} source={Icons.care[item.icon]} />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: Paddings.normal,
        }}
        >
          <Text style={styles.sectionItemTitle}>{item.title}</Text>
        </View>
        {
          item.type === 'switch'
            ? this.buildSwitchView(item)
            : this.buildLevelView(item)
        }
      </View>
    );
  }

  buildSwitchView = (item) => {
    return (
      <TouchableOpacity key={item.key} onPress={() => { this.onPressSwitchItem(item); }}>
        <Image style={{}} source={this.optionIsTurnOn(item) ? Icons.care.icon_switch_on : Icons.care.icon_switch_off} />
      </TouchableOpacity>
    );
  }

  optionIsTurnOn = (option) => {
    const { turnOnOptions, } = this.state;
    return turnOnOptions.find(item => item.key === option.key);
  }

  buildLevelView = (item) => {
    const levelItems = [];
    for (let i = 0; i < 5; i += 1) {
      //
      const levelItem = (
        <TouchableOpacity key={`${item.key}${i}`} onPress={() => { this.onPressLevelItem(item, i); }}>
          <Image style={{}} source={item.value > i ? Icons.care[item.levelIcon.on] : Icons.care[item.levelIcon.off]} />
        </TouchableOpacity>
      );
      levelItems.push(levelItem);
    }
    return (
      <View key={item.key} style={{ flexDirection: 'row', }}>
        {levelItems}
      </View>
    );
  }

  onPressLevelItem = (option, index) => {
    console.log('onPressLevelItem', option, index);
  }

  onPressSwitchItem = (option) => {
    console.log('onPressSwitchItem', option.title, option.value);
    const { turnOnOptions, } = this.state;
    console.log('before press', turnOnOptions);
    if (this.optionIsTurnOn(option)) {
      // remove it
      const idx = turnOnOptions.indexOf(option);
      turnOnOptions.splice(idx, 1);
    } else {
      // add it
      turnOnOptions.push(option);
    }

    this.setState({ turnOnOptions, }, () => {
      console.log('after press', this.state.turnOnOptions);
    });

    // const {
    //   dayStatus1_start,
    //   dayStatus2_end,
    //   dayStatus3_pain,
    //   dayStatus4_useBox,
    //   dayStatus5_boxEffect,
    //   dayStatus6_useSooz,
    //   dayStatus7_soozEffect,
    // } = this.state;
    // console.log('onPressSwitchItem', item);
    // console.log('dayStatus1_start', dayStatus1_start);
    // console.log('dayStatus2_end', dayStatus2_end);
    // console.log('dayStatus4_useBox', dayStatus4_useBox);
    // console.log('dayStatus6_useSooz', dayStatus6_useSooz);

    // switch (item.bindState) {
    //   case 'dayStatus1_start': {
    //     this.setState({ dayStatus1_start: !dayStatus1_start, });
    //     break;
    //   }
    //   case 'dayStatus2_end': {
    //     this.setState({ dayStatus2_end: !dayStatus2_end, });
    //     break;
    //   }
    //   // case dayStatus3_pain: 2,
    //   case 'dayStatus4_useBox': {
    //     this.setState({ dayStatus4_useBox: !dayStatus4_useBox, });
    //     break;
    //   }
    //   // case dayStatus5_boxEffect: 3,
    //   case 'dayStatus6_useSooz': {
    //     this.setState({ dayStatus6_useSooz: !dayStatus6_useSooz, });
    //     break;
    //   }
    //   // case dayStatus7_soozEffect: 4,
    //   default: {}
    // }
  }

  render() {
    const { menuItems, virtualized, turnOnOptions, } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: 10, alignItems: 'center', }}>
          <Text>问卷调查</Text>
        </View>
        <SectionList
            keyExtractor={this.keyExtractor}
            extraData={turnOnOptions}
            sections={menuItems}
            // ListHeaderComponent={this.listHeaderComponent}
            // renderSectionHeader={this.renderSectionHeader}
            renderItem={this.renderItemComponent}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            // SectionSeparatorComponent={this.SectionSeparatorComponent}
            // ListFooterComponent={this.listFooterComponent}

            enableVirtualization={virtualized}
            // onRefresh={() => alert('onRefresh: nothing to refresh :P')}
            // onViewableItemsChanged={this.onViewableItemsChanged}
            // refreshing={false}
            viewabilityConfig={VIEWABILITY_CONFIG}
          />
      </ScrollView>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    // backgroundColor: 'gray'
  }
});