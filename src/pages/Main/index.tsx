import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: Dimensions.get('window').height * 0.25,
    marginVertical: Dimensions.get('window').height * 0.25,
    width: Dimensions.get('window').height * 0.25 * (1950 / 662),
    borderRadius: 50,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Image
      source={require('../../assets/images/elder_logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao ElderCare!</Text>
  </ImageBackground>
);

export default Main;
