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
					<div className="about-section">
					    <Grid>
					        <div className="section-headeing">
					            <h2>Categories<span>Products</span></h2>
					        </div>
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
					                    <a href=""> <img src={`${assetsPrefix}/pro2.png`} /></a>
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
					                    <a href=""> <img src={`${assetsPrefix}/pro3.png`} /></a>
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
					                    <a href=""> <img src={`${assetsPrefix}/pro2.png`} /></a>
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
					                    <a href=""> <img src={`${assetsPrefix}/pro3.png`} /></a>
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
					    </Grid>  
					</div>
				</React.Fragment>
            )
    }
}
