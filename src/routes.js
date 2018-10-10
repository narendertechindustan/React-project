import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Shop from './containers/Shop'
import Blog from './containers/Blog'
import Aboutus from './containers/Aboutus'
import Contact from './containers/Contact'
import Faq from './containers/Faq'
import Productrates from './containers/Productrates'
import Privacypolicy from './containers/Privacypolicy'
import Productslists from './containers/Productslists'
import Shipping from './containers/Shipping'
import Termsconditions from './containers/Termsconditions'
import App from './containers/App'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    window.scrollTo(0,0)
  	return(
      <Fragment>
        <Header />
        <Component {...props} />
        <Footer />
      </Fragment>
      );
  }}/>
)

export default () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={App}/>
        <PublicRoute path='/shop' component={Shop}/>
        <PublicRoute path='/blog' component={Blog}/>
        <PublicRoute path='/aboutus' component={Aboutus}/>
        <PublicRoute path='/contact' component={Contact}/>
        <PublicRoute path='/faq' component={Faq}/>
        <PublicRoute path='/productrates' component={Productrates}/>
        <PublicRoute path='/privacypolicy' component={Privacypolicy}/>
        <PublicRoute path='/productslists' component={Productslists}/>
        <PublicRoute path='/shipping' component={Shipping}/>
        <PublicRoute path='/termsconditions' component={Termsconditions}/>
      </Switch>
    </Router>
  )
}