/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import SignOrSignUp from './components/registration/SignOrSignUp'

class App extends Component {
  state = { loggedIn: false }

  render() {
    if(this.state.loggedIn){
      return (
        <View>
          <Text>
            You're logged in!
          </Text>
        </View>
      )
    }
    return (
      <SignOrSignUp />
    )
  }
}

export default App;
