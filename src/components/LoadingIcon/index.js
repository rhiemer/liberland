import React from 'react';
import { Image } from 'react-native';
import Loader from './loader.gif';

export default ({source=Loader,...props}) =>   
  <Image source={source} {...props}/> 

