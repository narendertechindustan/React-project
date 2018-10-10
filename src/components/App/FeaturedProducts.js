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
                    <section className="instagram">
                        <Grid>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <div className="section-headeing">
                                       <h2>Featured <span>Products</span></h2>
                                    </div>
                                    <div className="slider_test">
                                        <div className="slider4">
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href=""><img src={`${assetsPrefix}/watch.png`} /></a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Watch</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href=""><img src={`${assetsPrefix}/pro1.png`} /></a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Ear Phone</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href=""><img src={`${assetsPrefix}/pro2.png`} /></a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Bags</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href=""><img src={`${assetsPrefix}/pro3.png`} /></a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Mobile</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href="">
                                                            <img src={`${assetsPrefix}/pro3.png`} />
                                                        </a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Stationery Products</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide">
                                                <div className="inner">
                                                    <div className="img-blk">
                                                        <a href=""> <img src={`${assetsPrefix}/pro1.png`} /></a>
                                                    </div>
                                                    <div className="txt-blk">
                                                        <div className="d-cell">
                                                            <h3><a href="">Stationery Products</a></h3>
                                                            <p>What is Lorem Ipsum?</p>
                                                            <h3 className="price">Price:<span> $300</span><span className="off">$200</span></h3>
                                                            <a className="addto-cats" href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </section>
                </React.Fragment>
            )
    }
}