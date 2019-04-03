import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeCom from '../components/Home/index';
import {getMemberList, changeInputInfo, postNewInfo} from '../modules/home/actions';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (<HomeCom {...this.props}/>);
    }
}

export default connect(
    state => ({homeState: state.home}),
    dispatch => ({
        getMemberList: bindActionCreators(getMemberList, dispatch),
        changeInputInfo: bindActionCreators(changeInputInfo, dispatch),
        postNewInfo: bindActionCreators(postNewInfo, dispatch),
    })
)(Home);