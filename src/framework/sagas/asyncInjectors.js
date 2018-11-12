export const injectAsyncReducer = ({ name,createReducers,asyncReducer,store }) => {  
  store.asyncReducers[name] = asyncReducer;
  const _reducers = createReducers(store.asyncReducers);    
  store.replaceReducer(_reducers);
}

export function injectAsyncSagas({ name, sagas, store }) {
  if (!store.asyncSagas)
  {
    store.asyncSagas=[];
  }
  if (!store.asyncSagas.includes(name)) {
    sagas.forEach(store.runSaga)
    store.asyncSagas.push(name)
  }
}