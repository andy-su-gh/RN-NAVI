/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoList: [],
    }
  }

  showConvertToBoolean = () => {
    let list = [];
    let index = 0;
    for (var value of [0, 1, -1, "0", "1", "cat", true, false, undefined, null, []]) {
      let info = { key: String(index), info: `Boolean(${typeof value} ${value}) is ${Boolean(value)}` };
      list.push(info);
      index++;
    }
    console.log('showConvertToBoolean', list);
    this.setState({
      infoList: list,
    });
  }

  listItem = (item) => {
    console.log('listItem', item);
    return <View style={{  }}>
      <Text style={{ color: 'black' }}>{item.item.info}</Text>
    </View>
  }

  listSeparator = () => {
    return <View style={{ height: 0.5, width: '100%', backgroundColor: 'gray', marginLeft: 10 }}></View>
  }

  listHeader = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: 'gray' }}></View>
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{`[0, 1, -1, "0", "1", "cat", true, false, undefined, null, []]`}</Text>
        <TouchableOpacity style={{ height: 40, width: '100%', alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderRadius: 5, borderColor: '#1ACACA', marginVertical: 10 }}
          onPress={() => { this.showConvertToBoolean() }}>
          <Text>Show Convert To Boolean</Text>
        </TouchableOpacity>
        <FlatList
          // style={{ borderColor: 'yellow', borderWidth: 0.5 }}
          renderItem={this.listItem}
          data={this.state.infoList}
          ListHeaderComponent={this.listHeader}
          ListFooterComponent={this.listHeader}
          ItemSeparatorComponent={this.listSeparator}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
