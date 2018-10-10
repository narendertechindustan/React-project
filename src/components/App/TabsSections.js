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
                    <div className="tab-sections">
                        <Grid>
                            <div className="product-tabs">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#home" data-toggle="tab" aria-expanded="true">NEW PRODUCTS</a></li>
                                    <li className=""><a href="#menu1" data-toggle="tab" aria-expanded="false">Best Rated</a></li>
                                    <li className=""><a href="#menu2" data-toggle="tab" aria-expanded="false">Best Seller</a></li>
                                    <li className=""><a href="#menu3" data-toggle="tab" aria-expanded="false">Best Products</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade active in" id="home">
                                        <div className="first-section">
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href=""> <img src={`${assetsPrefix}/watch.png`} /></a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href=""> <img src={`${assetsPrefix}/pro1.png`} /></a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/pro2.png`} />
                                                    </a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/pro3.png`} />
                                                    </a>
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
                                        <div className="first-section">
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/watch.png`} />
                                                    </a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/pro1.png`} />
                                                    </a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/pro2.png`} />
                                                    </a>
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
                                            <div className="inner">
                                                <div className="img-blk">
                                                    <a href="">
                                                        <img src={`${assetsPrefix}/pro3.png`} />
                                                    </a>
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
                                    </div>
                                    <div className="tab-pane fade" id="menu1">
                                        <div className="inner">
                                            <div className="img-blk">
                                                <a href="">
                                                    <img src={`${assetsPrefix}/watch.png`} />
                                                </a>
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
                                    <div className="tab-pane fade" id="menu2">
                                        <div className="inner">
                                            <div className="img-blk">
                                                <a href="">
                                                    <img src={`${assetsPrefix}/watch.png`} />
                                                </a>
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
                                    <div className="tab-pane fade" id="menu3">
                                        <div className="inner">
                                            <div className="img-blk">
                                                <a href="">
                                                    <img src={`${assetsPrefix}/watch.png`} />
                                                </a>
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
                                    <div className="tab-pane fade" id="menu4">
                                        <div className="inner">
                                            <div className="img-blk">
                                                <a href="">
                                                    <img src={`${assetsPrefix}/watch.png`} />
                                                </a>
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
                                </div>
                            </div>
                        </Grid>
                    </div>
                </React.Fragment>
            )
    }
}
