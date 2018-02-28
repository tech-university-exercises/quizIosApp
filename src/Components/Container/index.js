/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import NoteTitle from '../NoteTitle';
import NotePad from '../NotePad';
import Save from '../Save';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'rgb(41, 41, 41)',
  },
});

// type Props = {};
export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
    };
  }
  render() {
    console.log(this.state);
    const changeTitle = (newTitle) => {
      this.setState({
        noteTitle: newTitle,
      });
    };

    const changeContent = (newContent) => {
      const content = newContent.slice(0, 50);
      this.setState({
        noteContent: content,
      });
    };

    const getLength = () => (50 - this.state.noteContent.length);

    return (
      <View style={styles.container}>
        <NoteTitle noteTitle={this.state.noteTitle} changeTitle={changeTitle} />
        <NotePad noteContent={this.state.noteContent} changeContent={changeContent} />
        <Save remainingLength={getLength()} />
      </View>
    );
  }
}
