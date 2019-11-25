import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import {bindActionCreators} from 'redux';
import plus from '../img/plus.png';
import minus from '../img/minus.png';
import refresh from '../img/refresh.png';

const Counter = ({counter, inc, dec, rfr}) => {
    return (
        <div className="container">
            <h1 className="counter">{counter}</h1>
                <div className="wrap">
                    <button onClick={inc} className="btn inc"><img src={plus} alt="inct"/></button>
                    <button onClick={dec} className="btn dec"><img src={minus} alt="dec"/></button>
                    <div onClick={rfr} className="refresh">
                        <img src={refresh} alt="refresh"/>
                    </div>
                </div>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }
export default connect(mapStateToProps, actions)(Counter);