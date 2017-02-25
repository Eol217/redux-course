import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        const {user: {name}, page: {photos, year}, pageActions: {setYear}}  = this.props;
        return (
            <div>
                <User name={ name } />
                <Page photos={ photos } year={ year } setYear = { setYear }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
