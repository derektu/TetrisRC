import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

// 主畫面
//
class Main extends Component {
  
  _pressConnect() {
    alert('Connect');
  }

  _pressQuit() {
    alert('Quit');
  }
  
  // 標題列
  //
  _renderHeading() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Tetris 控制器</Text>
      </View>  
    ); 
  } 
  
  // 連線控制Toolbar
  //  - 藍芽連線button
  //  - 關閉程式button
  //
  _renderToolbar() {
    return (
      <View style={styles.toolbarContainer}>
        <TouchableHighlight underlayColor='transparent' onPress={this._pressConnect.bind(this)}>
          <Text style={styles.toolbarButton}>開始連線</Text>
        </TouchableHighlight>       
        <TouchableHighlight underlayColor='transparent' onPress={this._pressQuit.bind(this)}>
          <Text style={styles.toolbarButton}>離開程式</Text>     
        </TouchableHighlight>       
      </View>
    );    
  }
   
  render() {
    return (
      <View style={styles.container}>
        { this._renderHeading() }
        { this._renderToolbar() }
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
  
  //---------- Toolbar --------- 
  //
  toolbarContainer: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#DCFFFB',
    borderBottomWidth: 2,
    borderBottomColor: '#808080'
  },  
  
  toolbarButton: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#295EFF',
    margin: 8,
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


