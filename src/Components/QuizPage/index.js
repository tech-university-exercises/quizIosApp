/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import QuestionList from '../QuestionList';

const instructions = Platform.select({
  ios: 'PANMOLLLLL,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsMarked: {},
      allQuestionsArray: [],
      username: this.props.username,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/getQuestion').then(response => response.json()).then((response) => {
      console.log(response);
      this.setState({
        allQuestionsArray: response,
      });
    }).catch((err) => {
      console.log(err.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.username}</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <QuestionList
            username={this.state.username}
            allQuestionsArray={this.state.allQuestionsArray}
          />
        </ScrollView>
      </View>
    );
    // <View style={styles.container}>
    //   <View style={styles.welcomeBox}>
    //     <View style={styles.groupText}>
    //     <Text style={styles.welcomeMessage}>Welcome</Text>
    //     <Text style={styles.welcomeMessage}>to</Text>
    //     <Text style={styles.appName}>Quizzy!</Text>
    //     </View>
    //   </View>
    //   <View style={styles.loginBox}>
    //     <View style={styles.loginForm}>
    //       <Text style={styles.loginTitle}>Login</Text>
    //       <Text style={styles.loginFieldLabel}>Username</Text>
    //       <TextInput
    //         style={styles.loginField}
    //         onChangeText={(username) => this.props.changeUsername(username)}
    //         value={this.props.username}
    //       />
    //       <Button
    //         style={styles.loginButton}
    //         onPress={()=>{
    //           this.props.changeScreen(2);
    //         }}
    //         title="Login"
    //         color='rgb(24, 34, 76)'
    //         accessibilityLabel="Learn more about this purple button"
    //       />
    //     </View>
    //   </View>
    // </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  loginButton: {
    borderColor: 'rgb(0,0,0)',
    marginTop: 100,
    borderWidth: 10,
    borderRadius: 30,
  },
  groupText: {
    margin: '25%',
  },
  welcomeBox: {
    flex: 1,
    backgroundColor: 'rgb(107, 197, 240)',
  },
  loginBox: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  welcomeMessage: {
    fontSize: 35,
    fontWeight: '800',
    textAlign: 'center',
    color: 'rgb(24, 34, 76)',
  },
  appName: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    color: 'rgb(250,250,250);',
  },
  loginField: {
    height: 35,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  loginForm: {
    margin: '8%',
  },
  loginTitle: {
    fontSize: 23,
    fontWeight: '600',
    color: 'rgb(0,0,0);',
  },
  loginFieldLabel: {
    fontSize: 23,
    fontWeight: '600',
    color: 'rgb(0,0,0);',
    marginTop: 50,
  },
});
