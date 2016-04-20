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

  _pressStart() {
    alert('Start');
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
  
  _renderGameToolbar() {
    // TODO: 一開始是Start, 按了之後變成 Pause 跟 Stop
    //
    return (
      <View style={styles.gametoolbarContainer}>
        <TouchableHighlight underlayColor='transparent' onPress={this._pressStart.bind(this)}>
          <Text style={styles.startButton}>START</Text>
        </TouchableHighlight>       
      </View>
    );    
  }
   
  render() {
    return (
      <View style={styles.container}>
        { this._renderHeading() }
        { this._renderToolbar() }
        { this._renderGameToolbar() }
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
  
  //---------- Game Toolbar -------
  //
  gametoolbarContainer: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#808080'
  },  
  
  startButton: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF205C',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  stopButton: {
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


