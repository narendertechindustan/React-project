import React, {Component} from 'react';
import moment from 'moment'
import NotificationTab from './NotificationTab'
import NotificationArea from './NotificationArea'

export default class App extends Component {
    
    constructor(){
        super()
        this.state = {
            task :false,
            reminder : false,
            notification : false
        }
    }
    componentWillMount(){
        this.setState({
            task :false,
            reminder : false,
            notification :false
        })
    }
    
    clicked =(key) =>{
        this.setState({
            [key] : true
        })
    }
    
    
    render () {
        return <div className="container">
                <div className="row">
                    <div style={{width :'100%'}}> {moment().format('LL')}</div>
                    <div style={{height : '35px'}}></div>
                    <NotificationTab count={56} text='Assigned tasks' onClick={() => this.clicked('task')}/>
                    <NotificationTab count={87} text='Reminders' onClick={() => this.clicked('reminder')}/>
                    <NotificationTab count={20} text='Notifications' onClick={() => this.clicked('notification')}/>
                    {this.state.task ? <NotificationArea text="task"/> : null}
                    {this.state.reminder ? <NotificationArea text="reminder"/> : null}
                    {this.state.notification ? <NotificationArea text="notification"/> : null}
                </div>
            </div>
    }
}