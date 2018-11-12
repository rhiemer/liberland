import React from 'react'

export default ({component:Component,reducer,sagas,createReducers,store:pStrore,injectAsyncReducer:pInjectAsyncReducer,injectAsyncSagas:pInjectAsyncSagas,...props}) => 
 {
    if (sagas && pInjectAsyncSagas) {
      pInjectAsyncSagas({
        name: sagas.name,
        sagas: sagas.sagas,
        store:pStrore
      })
    }
    if (reducer && pInjectAsyncReducer) {            
      pInjectAsyncReducer({
        name: reducer.name,
        asyncReducer: reducer.reducer,
        store:pStrore,
        createReducers
      })
    }
    return <Component {...props} />
}

