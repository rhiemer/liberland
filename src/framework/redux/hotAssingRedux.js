const configureAsyncReducers = () => { 
   return (js,store) => module.hot.accept(js, () => {
        import(js).then((reducerModule) => {
            const replaceReducer = reducerModule.default;
            replaceReducer(store,store.asyncReducers);                
        });
    });
}

export default configureAsyncReducers;  

