import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 10
  },
  button: {
    color: 'red',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
    width: .5
  },
});

class SignOrSignUp extends Component {
  render () {
    return(
      <View style={styles.container} >
        <Button style={styles.button} title='Sign Up!' />
        <Button style={styles.button} title='Sign In!' />
      </View>
    )
  }
}



export default SignOrSignUp;
