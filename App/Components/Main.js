import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  BackAndroid,
} from 'react-native';

var BTSerial = require('react-native-android-btserial');

// Control Button
//  <ControlButton text='..' onPress={..}></ControlButton>
class ControlButton extends Component {
  constructor(props) {
    super(props);
  }

  _handlePress() {
    this.props.onPress();  
  }
  
  render() {
    return (
      <TouchableHighlight underlayColor='transparent' onPress={this._handlePress.bind(this)}>
        <View style={styles.control}>
          <Text style={styles.controlButton}>{this.props.text}</Text>
        </View>  
      </TouchableHighlight>  
    )  
  }
}

// 主畫面
//
class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton.bind(this));
    BTSerial.isEnabled((err, enabled)=> {
      if (err || !enabled) {
        Alert.alert(
          'TetrisRC',
          '請啟動藍芽裝置。',
          [
            {text: 'OK', onPress: () => { BTSerial.showBTSettings(); }}
          ]
        );
      }
    })
  }
  
  _handleBackButton() {
    this._handleExit();
    return true;
  }
  
  _handleExit() {
    // 詢問是否要離開程式
    //
    Alert.alert(
      'TetrisRC',
      '確定要離開程式嗎？',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'OK', onPress: () => { BackAndroid.exitApp(); }}
      ]
    )
  }
  
  _pressConnect() {
    alert('Connect');
  }

  _pressQuit() {
    this._handleExit();
  }

  _pressStart() {
    alert('Start');
  }
  
  _pressButton(direction) {
    alert(direction);
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
  
  // Game的方向按鈕
  //
  _renderControlPad() {
    return (
      <View style={styles.padContainer}>
        <View style={styles.padRow}>
          <ControlButton text='L' onPress={this._pressButton.bind(this, 'L')}/>
          <ControlButton text='D' onPress={this._pressButton.bind(this, 'D')}/>
          <ControlButton text='R' onPress={this._pressButton.bind(this, 'R')}/>
        </View>
        <View style={styles.padRow}>
          <ControlButton text='LL' onPress={this._pressButton.bind(this, 'LL')}/>
          <ControlButton text='DD' onPress={this._pressButton.bind(this, 'DD')}/>
          <ControlButton text='RR' onPress={this._pressButton.bind(this, 'RR')}/>
        </View>
      </View>  
    );    
  }
   
  render() {
    return (
      <View style={styles.container}>
        { this._renderHeading() }
        { this._renderToolbar() }
        { this._renderGameToolbar() }
        { this._renderControlPad() }
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
  
  //---------- Pad --------- 
  //
  padContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  padRow: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: 10,
  },

  control: {
    borderWidth: 2,
    borderColor: '#606060',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FFAE94',
  },

  controlButton: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1010FF',
  },
  
});

module.exports = Main;


