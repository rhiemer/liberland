import { createStore } from 'redux';
import { fromJS } from 'immutable';
import createStoreComSagas from '../../framework/sagas/createStore';
import { createReducers } from '../reducer';

const createStoreApp = (enhancers,initialState = {}) => {    
    let store = createStore(
      createReducers(),
      fromJS(initialState),
      enhancers
    );         
    store.asyncReducers = {};   
    return store;   
};

const createStoreESagas = (initialState = {}) => {        
    return createStoreComSagas({        
        createStore:(enhancers)=>{return createStoreApp(enhancers,initialState);}           
    });     
 }; 

 

 export default createStoreESagas;
