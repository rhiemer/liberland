// eslint-disable-next-line
import React from 'react'
import injectorComponent from '../../../framework/sagas/injectorComponent';
import {injectAsyncReducer,injectAsyncSagas} from '../../../framework/sagas/asyncInjectors';
import { createReducers } from '../../reducer';
import store from '../../store';

export default (props) => {
  return injectorComponent(     
     store,
     createReducers,
     injectAsyncReducer,
     injectAsyncSagas,    
     ...props
  );   
}            