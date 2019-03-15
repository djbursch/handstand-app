import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Header, Button, Divider} from 'react-native-elements';

class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Header
          placement="left"
          backgroundColor='#ff9900'
          centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}/>
          <Image
            source={require('../assets/hsLogo.png')}
            style={{ width: 200, height: 200, alignSelf: 'center', marginVertical:80}}
          />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cameraButton:{
    height: 50,
    width: 130,
    alignSelf: 'center',
  }
});
