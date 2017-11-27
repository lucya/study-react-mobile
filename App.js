import React,{Component}  from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component {
  _getMsg(){
    Alert.alert('test react!!!');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={this._getMsg} title="Click me" />
      </View>      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
