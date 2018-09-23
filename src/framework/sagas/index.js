import {applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

const concatSagas = (sagas,middlewares=[]) =>{     
    Array.isArray(sagas)?       
       middlewares.concat(sagas):
        Object.keys(sagas).length == 0? 
         middlewares.push(sagas):
           Object.keys(sagas).map(function(key) {middlewares.push(sagas[key]);}); 
    return middlewares;                   
}

const runSagas = ({createStore,runSaga=createSagaMiddleware(),sagas=[]}) => {  
    let _sagas = concatSagas(sagas);    
    let storeMd = createStore(compose(...applyMiddleware(..._sagas)));   
    storeMd.runSaga = runSaga.run;        
    Object.keys(_sagas).map(function(key) { return _sagas[key]; }).map(storeMd.runSaga); 
    return storeMd;  
}

export default runSagas;