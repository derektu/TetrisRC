/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Main = require('./App/Components/Main');

class TetrisRC extends Component {
  render() {
    return (
      <Main/>
    );
  }
}


AppRegistry.registerComponent('TetrisRC', () => TetrisRC);
