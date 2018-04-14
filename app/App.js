import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <GoogleSigninButton 
          style={{ width: 320, height: 54 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
