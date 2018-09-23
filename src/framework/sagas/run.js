import concatSagas from './concat';

export default ({sagas,runSaga}) => {  
    concatSagas(sagas).map(runSaga); 
};