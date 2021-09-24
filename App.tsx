/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import {Home} from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';

function App(){
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <Home/>
    </>
  );
};

export default App;
