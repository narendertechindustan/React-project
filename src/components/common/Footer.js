import React from 'react';
import {assetsPrefix } from '../../constants'
import { Link } from 'react-router-dom';


import {
Col,
ControlLabel,
Button,
Row,
Grid,
FormControl,
Navbar,
NavDropdown,
NavItem,
Nav,
MenuItem,
Dropdown
} from 'react-bootstrap';

export default class Footer extends React.Component{
    render(){
        return(
                <React.Fragment>
                    <footer>
                        <Grid className="cus-footer">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Col xs={12} sm={3} md={3} lg={3} className="cus-ft">
                                        <a href="#"><img src={`${assetsPrefix}/pay--pal.png`} /></a>                    
                                    </Col>
                                    <Col xs={12} sm={3} md={3} lg={3} className="cus-ft">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/shop">Shop</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/faq">FAQs</Link></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} sm={3} md={3} lg={3} className="cus-ft">
                                        <ul>
                                            <li><Link to="/productrates">Product Rates</Link></li>
                                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                            <li><Link to="/productslists">Products Lists</Link></li>
                                            <li><Link to="/shipping">Shipping</Link></li>
                                            <li><Link to="/termsconditions">Terms & Conditions</Link></li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} sm={3} md={3} lg={3} className="cus-ft lasted">
                                        <h3>Please Subscribe</h3>
                                        <form action="#">
                                            <div className="input-group">
                                                <input className="btn btn-lg" name="email" id="email" type="email" placeholder="Your Email" required /> 
                                                <button className="btn btn-info btn-lg" type="submit">Go!</button>
                                             </div>
                                        </form>
                                        <ul>
                                            <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                            <li><Link to="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>                        
                                        </ul>
                                    </Col>
                                </Col> 
                            </Row>                  
                        </Grid>
                        <div className="bottom-slider">
                            <Grid>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <p className="coppright">© Copyright © 2017.</p>                
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </footer>
                </React.Fragment>
            )
    }
}