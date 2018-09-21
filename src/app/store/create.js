import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { runSagas } from '../../framework/sagas';
import { sagas } from '../sagas';
import { createReducers } from '../reducer';


const createStoreApp = (enhancers,initialState = {}) => {    
    let store = createStore(
      createReducers(),
      fromJS(initialState),
      enhancers
    );     
    // Extensions
    store.asyncReducers = {};
    if (module.hot) {
       //hotAssingRedux('./replaceReducer',store);
    }
    return store;
};

const createStoreESagas = (initialState = {}) => {        
    runSagas({
        sagas,
        createStore:(enhancers)=>{return createStoreApp(enhancers,initialState);}           
    });     
 }; 


 export default createStoreESagas;
