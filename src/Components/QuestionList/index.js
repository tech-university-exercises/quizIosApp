/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'PANMOLLLLL,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsMarked: {},
      allQuestionsArray: [],
    };
  }

  render() {
    const populateOptions = (eachQuestion) => {
      const radio_props = [];
      for (const option in eachQuestion.options) {
        radio_props.push({
          label: option, value: eachQuestion.options.option,
        });
      }
      const RadioButtonProject = React.createClass({
        getInitialState() {
          return {
            value: 0,
          };
        },
        render() {
          return (
            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value }); }}
              />
            </View>
          );
        },
      });
    };
    // <div className="EachQuestion-radio">
    //   <input
    //     type="radio"
    //     checked={props.wasChecked === props.question.options[option]}
    //     onChange={(event) => { optionSelectionMade(event, props); }}
    //     name={props.question.questionId}
    //     value={props.question.options[option]}
    //   /> {props.question.options[option]}
    //                      </div>
    const withOutRadioButton = (eachEntry) => {
      const optionlist = [];
      for (const option in eachEntry.options) {
        // console.log(option, eachEntry.options[option]);
        optionlist.push(<Text>{option} {eachEntry.options[option]}</Text>);
      }
      return optionlist;
    };
    const populateList = () => {
      const newList = this.props.allQuestionsArray.map((eachEntry, index) => (
        <View style={styles.contentContainer}>
          <Text style={styles.UserHeader}>Question {index + 1}</Text>
          <View style={styles.quizQuestion}><Text>{eachEntry.question}</Text></View>
          <View style={styles.multipleOptions}>
            {withOutRadioButton(eachEntry)}
          </View>
        </View>));
      return newList;
    };

    return (
      <View style={styles.container}>{populateList()}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  UserHeader: {
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    borderColor: 'rgb(0,0,0)',
    borderWidth: 3,
    marginBottom: 5,
  },
  quizQuestion: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 3,
    backgroundColor: 'rgb(107,197,240)',
  },
  multipleOptions: {
    marginLeft: 10,
  },
});
