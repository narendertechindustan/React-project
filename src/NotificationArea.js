import React, {Component} from 'react';


export default class NotificationArea extends Component {
    render () {
        return<div className="row">
            This is a test {this.props.text} test. 
        </div> 
    }
}