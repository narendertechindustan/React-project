import React, {Component} from 'react';


export default class NotificationArea extends Component {

    del(index, label){
        console.log(index)
        this.props.onDelete(index, label)
    }

    render () {
        return<div className="row">
            <ul>
            {this.props.text.length > 0 ? 
                this.props.text.map((data, index )=> <li key={index}>{data.value}  {data.label}  {index + 1 }  <button onClick={() => this.del(index,data.label)}> Close </button></li>)
                : <p>No data available.</p>}
            </ul>
        </div> 
    }
}