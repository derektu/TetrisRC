import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 主畫面
//
class Main extends Component {
  
  // 標題列
  //
  _renderHeading() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Tetris 控制器</Text>
      </View>  
    ); 
  } 
  
  
  render() {
    return (
      <View style={styles.container}>
        { this._renderHeading() }
        <View style={styles.bodyContainer}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //---------- Heading --------- 
  //
  headingContainer: {
    backgroundColor: '#202020',
  },
  
  headingText: {
    marginVertical: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
    flex: 1,
    textAlign: 'center',  
  },
  
  //---------- Body --------- 
  //
  bodyContainer: {
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
});

module.exports = Main;


