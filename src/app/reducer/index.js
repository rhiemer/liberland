import { combineReducers } from 'redux-immutable';
import reducers from './reducers';

export function createReducers(asyncReducers={}) {
  return combineReducers({
    ...reducers,    
    ...asyncReducers,    
  });
}

export function replaceReducer(store,reducers)  {    
    const nextReducers = createReducers(reducers);
    store.replaceReducer(nextReducers);
}
