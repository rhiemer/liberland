const configureAsyncReducers = (store) => {
    
    store.asyncReducers = {};  
       
    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('../reducer', () => {
            import('../reducer').then((reducerModule) => {
                const replaceReducer = reducerModule.default.replaceReducer;
                replaceReducer(store,store.asyncReducers);                
            });
        });
    }
}

export default configureAsyncReducers;  

