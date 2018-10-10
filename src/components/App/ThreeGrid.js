import React from 'react';
import {assetsPrefix } from '../../constants'

import {
Col,
ControlLabel,
Button,
Row,
Grid,
FormControl
} from 'react-bootstrap';

export default class Footer extends React.Component{
    render(){
        return(
                <React.Fragment>  
                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="affter-slider">
                                    <Col xs={12} sm={4} md={4} lg={4}>           
                                        <div data-aos="fade-right">
                                            <div className="cust-sect">
                                                <div className="left-sct">
                                                    <h2>BAG</h2>
                                                    <p>Discount up to <span>30%</span></p>
                                                    <h3 className="price">Price:<span> $300</span></h3>
                                                    <a href="#">shop now</a>
                                                </div>
                                                <div className="right-img">
                                                    <img src={`${assetsPrefix}/teche.png`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>  
                                        <div data-aos="fade-up">
                                            <div className="cust-sect">
                                                <div className="left-sct">
                                                    <h2>Mobile</h2>
                                                    <p>Discount up to <span>20%</span></p>
                                                    <h3 className="price">Price:<span> $800</span></h3>
                                                    <a href="#">shop now</a>
                                                </div>
                                                <div className="right-img">
                                                    <img src={`${assetsPrefix}/mobel.png`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>  
                                        <div data-aos="fade-left">
                                            <div className="cust-sect">
                                                <div className="left-sct">
                                                    <h2>BAG</h2>
                                                    <p>Discount up to <span>25%</span></p>
                                                    <h3 className="price">Price:<span> $300</span></h3>
                                                    <a href="#">shop now</a>
                                                </div>
                                                <div className="right-img">
                                                    <img src={`${assetsPrefix}/watch.png`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </React.Fragment>
            )
    }
}