import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

import { createUser } from '../../routing'

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
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    email: '',
  }

  submitForm () {
    createUser(this.state)
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            autoCompleteType='email'
            placeholder='Email'
            editable
            maxLength={40}
            onChangeText={(email) => this.setState({email: email})}
          />
          <TextInput
            placeholder='Username'
            editable
            maxLength={40}
            onChangeText={username => this.setState({username})}
          />
          <Seperator />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            editable
            maxLength={40}
            onChangeText={password => this.setState({password})}
          />
          <Seperator />
          <TextInput
            placeholder='Password Confirmation'
            secureTextEntry={true}
            editable
            maxLength={40}
            onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}
          />
          <Button title="Sign Up" onPress={this.submitForm} />
        </View>
      </SafeAreaView>
    );
  }
}

export default SignIn;
