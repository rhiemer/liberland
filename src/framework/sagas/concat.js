
export default  (sagas,middlewares=[]) => {     
    Array.isArray(sagas)?       
       middlewares.concat(sagas):
        Object.keys(sagas).length == 0? 
         middlewares.push(sagas):
           Object.keys(sagas).map(function(key) {middlewares.push(sagas[key]);}); 
    return middlewares;                   
};