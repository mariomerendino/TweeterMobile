import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const Seperator = () => (
  <View style={styles.separator} />
)

class SignInOrSignUp extends Component {
  signIn() {
    return(
      <SignIn />
    )
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button 
            title="Sign In"
            onPress={() => { this.props.navigation.push('Sign In') }} 
          />
          <Seperator />
          <Button 
            title="Create Account"
            onPress={() => { this.props.navigation.push('Sign Up') }} 
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SignInOrSignUp;
