import React, {Component} from 'react';


export default class NotificationTab extends Component {
    render () {
        return<div className="col-xs-6 col-md-4" onClick={::this.props.onClick}>
        <span style={{height :'40px', color : '#17a2b8' }}>{this.props.count}</span> &nbsp;{this.props.text}
    </div> 
    }
}