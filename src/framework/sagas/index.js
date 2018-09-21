import {applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

const convertSagas = (sagas) =>{ 
    let middlewares = [];
    Array.isArray(sagas)?
          middlewares.concat(sagas):
              Object.keys(sagas).map(function(key) {middlewares.push(sagas[key]);});
    return middlewares;         
}

const runSagas = ({sagas,createStore,runSaga=createSagaMiddleware()}) => { 
    _sagas = convertSagas(sagas);
    _sagas.push(runSaga);
    let enhancers = [
      applyMiddleware(..._sagas)
    ];      
    let storeMd = createStore(compose(...enhancers));   
    storeMd.runSaga = runSaga.run;    
    Object.keys(_sagas).map(function(key) { return obj[key]; }).map(storeMd.runSaga);   
}

export default runSagas;