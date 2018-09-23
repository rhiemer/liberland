import {applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import concatSagas from './concat';

export default ({createStore,runSaga=createSagaMiddleware(),sagas=[]}) => {      
    let storeMd = createStore(compose(...applyMiddleware(...concatSagas(sagas))));   
    storeMd.runSaga = runSaga.run;           
    return storeMd;  
};