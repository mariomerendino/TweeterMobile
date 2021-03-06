import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
class SignIn extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            autoCompleteType='email'
            placeholder='Email'
            editable
            maxLength={40}
          />
          <Seperator />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            editable
            maxLength={40}
          />
          <Button title="Sign In"/>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignIn;
