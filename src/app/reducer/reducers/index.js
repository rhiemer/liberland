import global from './global';
import app from './app';
import frameWorksReducer from './frameWorks';

export default { 
    global,
    app,  
    ...frameWorksReducer
};