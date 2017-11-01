import React, { Component } from 'react';
import App_Component from './App_component.js'
import { connect } from 'react-redux'
import GettingData_Middleware from './store/middlewares/gettingData_middleware.js'

function mapStateToProps(state) {
    return {
        data:state.GettingData_Reducer
    }
}

function mapDispatchToProps(dispatch) { 
    return {
        gettingData:function(){dispatch(GettingData_Middleware.asyncGettingData())},
    };
};

class App_Container extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({data:nextProps.data})    
    }
    
    componentDidMount(){
        this.props.gettingData()
    }
    render(){
      //  console.log(this.state.data)
        return(
            <App_Component 
            data={this.state.data}
            />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App_Container)