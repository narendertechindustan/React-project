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

export default class Header extends React.Component{
    render(){

        return(
                <React.Fragment>
                    <section className="pre-hdr">
                        <Grid>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} className="rgt">
                                    <p className="num">
                                        <span>Call us on </span><a href="#">(44)7970 433737</a>
                                    </p>
                                </Col>
                                <div className="clearfix"></div>
                            </Row>
                        </Grid>
                    </section>                    

                    <nav className="navbar navbar-inverse custm_nav">
                        <Grid>
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-brand" to="/"><img src={`${assetsPrefix}/logo.png`}/></Link>                                
                            </div>
                            <div className="nav-contnt">
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/aboutus">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/faq">FAQs</Link></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right"></ul>
                                </div>
                            </div>
                        </Grid>
                    </nav> 


                </React.Fragment>
            )
    }
}




