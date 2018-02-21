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
            notification : false,
            tasks : [
                {
                    label : "task",
                    value : "Set up seed"
                },
                {
                    label :"task",
                    value : "Set up dev server"
                },
                {
                    label :"task",
                    value : "Set up git hub repo."
                },
                {
                    label : "task",
                    value : "Set up seed"
                },
                {
                    label :"task",
                    value : "Set up dev server"
                },
                {
                    label :"task",
                    value : "Set up git hub repo."
                }
            ],
            reminders : [
                {
                    label : "reminder",
                    value : "Set up seed"
                },
                {
                    label :"reminder",
                    value : "Set up dev server"
                },
                {
                    label :"reminder",
                    value : "Set up git hub repo."
                },
                {
                    label : "reminder",
                    value : "Set up seed"
                },
                {
                    label :"reminder",
                    value : "Set up dev server"
                },
                {
                    label :"reminder",
                    value : "Set up git hub repo."
                }
            ],
            notifications : [
                {
                    label : "notification",
                    value : "Set up seed"
                },
                {
                    label :"notification",
                    value : "Set up dev server"
                },
                {
                    label :"notification",
                    value : "Set up git hub repo."
                },
                {
                    label : "notification",
                    value : "Set up seed"
                },
                {
                    label :"notification",
                    value : "Set up dev server"
                },
                {
                    label :"notification ",
                    value : "Set up git hub repo."
                }
            ]
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
        if(key == 'task'){
            this.setState({
                [key] : true,
                reminder : false,
                notification : false,
                

            })
        }
        if(key == 'reminder'){
            this.setState({
                [key] : true,
                task : false,
                notification : false
            })
        }
        if(key == 'notification'){
            this.setState({
                [key] : true,
                reminder : false,
                task : false
            })
        }
        
    }

   onDelete(id, label){
    if(label == 'task'){
       let arr1 = this.state.tasks.filter((item, index)  => { 
        return index != id
    })
        this.setState({ tasks : arr1})
    }
    if(label == 'notification'){
        let arr2 = this.state.notifications.filter((item, index) => { 
            return index != id 
        })
        this.setState({ notifications : arr2 })
    }
    if(label == 'reminder'){
        let arr3= this.state.reminders.filter((item, index)  => { 
            return index != id 
        })
        this.setState({ reminders : arr3 })
    }
   }
    
    
    render () {
        return <div className="container">
                <div className="row">
                    <div style={{width :'100%'}}> <h3>{moment().format('LL')}</h3></div>
                    <div style={{height : '35px'}}></div>
                    <NotificationTab count={this.state.tasks.length} text='Assigned tasks' onClick={() => this.clicked('task')}/>
                    <NotificationTab count={this.state.reminders.length} text='Reminders' onClick={() => this.clicked('reminder')}/>
                    <NotificationTab count={this.state.notifications.length} text='Notifications' onClick={() => this.clicked('notification')}/>
                    {this.state.task ? <NotificationArea  onDelete={::this.onDelete} text={this.state.tasks} count={this.state.tasks.length}/> : null}
                    {this.state.reminder ? <NotificationArea   onDelete={::this.onDelete} text={this.state.reminders} count={this.state.reminders.length} /> : null}
                    {this.state.notification ? <NotificationArea   onDelete={::this.onDelete} text={this.state.notifications} count={this.state.notifications.length}/> : null}
                </div>
            </div>
    }
}