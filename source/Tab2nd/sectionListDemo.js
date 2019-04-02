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
      infoValue: {
        isStart: true,
        isEnd: false,
        painLevel: 4,
        isUseBox: false,
        boxEffect: 0,
        isUseSooz: true,
        soozEffect: 2,
      },
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
      <TouchableOpacity key={item.key} onPress={() => { this.onPressSwitchItemEx(item); }}>
        <Image style={{}} source={this.optionIsTurnOn(item) ? Icons.care.icon_switch_on : Icons.care.icon_switch_off} />
      </TouchableOpacity>
    );
  }

  optionIsTurnOn = (item) => {
    const { infoValue, } = this.state;
    // return turnOnOptions.find(item => item.key === option.key);
    switch (item.key) {
      case '0': {
        return infoValue.isStart;
      }
      case '1': {
        return infoValue.isEnd;
      }
      case '3': {
        return infoValue.isUseBox;
      }
      case '5': {
        return infoValue.isUseSooz;
      }
      default : {
        return false;
      }
    }
  }

  onPressSwitchItemEx = (item) => {
    const { infoValue, } = this.state;
    console.log('before press', item.key, infoValue);
    // const newInfoValue = {
    //   isStart: infoValue.isStart,
    //   isEnd: infoValue.isEnd,
    //   painLevel: infoValue.painLevel,
    //   isUseBox: infoValue.isUseBox,
    //   boxEffect: infoValue.boxEffect,
    //   isUseSooz: infoValue.isUseSooz,
    //   soozEffect: infoValue.soozEffect,
    // };
    // ES6, copy to new object
    const newInfoValue = Object.assign({}, infoValue);

    switch (item.key) {
      case '0': {
        newInfoValue.isStart = !newInfoValue.isStart;
        // infoValue.isStart = !infoValue.isStart;
        break;
      }
      case '1': {
        newInfoValue.isEnd = !newInfoValue.isEnd;
        // infoValue.isEnd = !infoValue.isEnd;
        break;
      }
      case '3': {
        newInfoValue.isUseBox = !newInfoValue.isUseBox;
        // infoValue.isUseBox = !infoValue.isUseBox;
        break;
      }
      case '5': {
        newInfoValue.isUseSooz = !newInfoValue.isUseSooz;
        // infoValue.isUseSooz = !infoValue.isUseSooz;
        break;
      }
      default : { }
    }
    // console.log('after press state', item.key, infoValue);
    // console.log('after press newValue',item.key, newInfoValue);
    this.setState({
      infoValue: newInfoValue,
    }, () => {
      console.log('after press setState', this.state.infoValue);
    });
  }

  buildLevelView = (item) => {
    const levels = 5;
    const levelItems = [];
    for (let i = 0; i < levels; i += 1) {
      //
      const levelItem = (
        <TouchableOpacity key={`${item.key}${i}`} onPress={() => { this.onPressLevelItem(item, i); }}>
          <Image style={{}} source={this.getLevelValue(item) > i ? Icons.care[item.levelIcon.on] : Icons.care[item.levelIcon.off]} />
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

  getLevelValue = (item) => {
    const { infoValue, } = this.state;
    switch (item.key) {
      case '2': {
        return infoValue.painLevel;
      }
      case '4': {
        return infoValue.boxEffect;
      }
      case '6': {
        return infoValue.soozEffect;
      }
      default: {
        return 0;
      }
    }
  }
  onPressLevelItem = (item, index) => {
    console.log('onPressLevelItem', item, index);
    const { infoValue, } = this.state;
    const newInfoValue = Object.assign({}, infoValue);
    switch (item.key) {
      case '2': {
        newInfoValue.painLevel = index + 1;
        break;
      }
      case '4': {
        newInfoValue.boxEffect = index + 1;
        break;
      }
      case '6': {
        newInfoValue.soozEffect = index + 1;
        break;
      }
      default: { }
    }
    this.setState({
      infoValue: newInfoValue,
    }, () => {
      // console.log('after press setState', this.state.infoValue);
    });
  }

  render() {
    const { menuItems, virtualized, infoValue, } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: 10, alignItems: 'center', }}>
          <Text>问卷调查</Text>
        </View>
        <SectionList
            keyExtractor={this.keyExtractor}
            extraData={infoValue}
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