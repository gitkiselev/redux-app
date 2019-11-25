import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
//import {inc, dec, rfr} from './actions';
//import * as actions from './actions';
import App from './components/app';



const store = createStore(reducer);
//const {dispatch} = store;

// actions = {
//     inc: inc,
//     dec: dec,
//     rfr: rfr
// }

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

//const {inc, dec, rfr} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rfrDispatch = bindActionCreators(rfr, dispatch);
//const rndDispatch = bindActionCreator(rnd, dispatch);
//document.getElementById('inc').addEventListener('click', inc);
//document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rndDispatch(value)
// });
//document.getElementById('rfr').addEventListener('click', rfr);



    //document.getElementById('counter').textContent = store.getState();
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    
    , document.getElementById('root'));

// update();
// store.subscribe(update);

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})



