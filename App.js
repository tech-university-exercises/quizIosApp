/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import WelcomeScreen from './src/Components/WelcomePage';
import QuizPage from './src/Components/QuizPage';

const instructions = Platform.select({
  ios: 'PANMOLLLLL,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state={
      username: '',
      showScreen: 1
    }
  }
  render() {
    const changeUsername = (newUserName)=>{
      this.setState({
        username: newUserName
      });
    }

    const changeScreen = (screenNumber)=>{
      this.setState({
        showScreen: screenNumber
      });
    }
    if(this.state.showScreen === 1){
      return (
        <View style={styles.container}>
          <WelcomeScreen changeScreen={changeScreen} changeUsername={changeUsername} username={this.state.username}/>
        </View>
      );
    } else if(this.state.showScreen === 2){
      return (<View style={styles.container}><QuizPage username={this.state.username}/></View>);
    }
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //   Hello Everyone !
      //   </Text>
      //   <Text style={styles.instructions}>
      //     I am Anmol.
      //   </Text>
      // </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  groupText:{
    margin: '25%',
  },
  welcomeBox: {
    flex: 1,
    backgroundColor: 'rgb(107, 197, 240)'
  },
  loginBox: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)'
  },
  welcomeMessage: {
    fontSize: 35,
    fontWeight: '800',
    textAlign: 'center',
    color: 'rgb(24, 34, 76)'
  },
  appName: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    color: 'rgb(250,250,250);'
  },
  loginField:{
    height: 35,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2
  },
  loginForm:{
    margin: '8%'
  },
  loginTitle: {
    fontSize: 23,
    fontWeight: '600',
    color: 'rgb(0,0,0);'
  },
  loginFieldLabel: {
    fontSize: 23,
    fontWeight: '600',
    color: 'rgb(0,0,0);',
    marginTop: 50
  },
});
