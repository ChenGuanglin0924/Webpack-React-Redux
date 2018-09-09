import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabBar from './application/TabBar';
import MainPage from './application/MainPage';
import { changeTabBarIndex } from '../redux/action/changeTabBarAction'

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let loading = document.getElementById('loading');
        let body = document.getElementsByTagName('body')[0];
        if(loading && body) {
            body.removeChild(loading);
        }
    }

    render() {
        return (
            <div>
                <MainPage
                    selectedIndex={this.props.selectedIndex}/>
                <TabBar
                    selectedIndex={this.props.selectedIndex} 
                    changeTabBarIndex={this.props.changeTabBarIndex}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedIndex: state.changeTabBarReducer.selectedIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTabBarIndex: (idx) => dispatch(changeTabBarIndex(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);