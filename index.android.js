/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

export default class tukarjual extends Component {
  render() {
    return (
      <WebView
       source={{uri: 'http://tukarjual.com'}}
       style={{marginTop: 20}}
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  imgHome: {
    width: 150,
    height: 50,

  }
});

AppRegistry.registerComponent('tukarjual', () => tukarjual);
