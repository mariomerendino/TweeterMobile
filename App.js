/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import SignInOrSignUp from './components/registration/SignInOrSignUp'
import SignIn from './components/registration/SignIn'


const AuthStack = createStackNavigator();
class App extends Component {
  state = { loggedIn: false }

  render() {
    return(
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name ="Registration" component={SignInOrSignUp} />
          <AuthStack.Screen name ="Sign In" component={SignIn} />
        </AuthStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
