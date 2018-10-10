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
                    <div id="myCarousel" className="carousel slide"> 
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="fill"></div>
                                <Grid>
                                    <div className="carousel-caption">
                                        <div className="mid-cont">
                                            <div className="slider-left">
                                                <img src={`${assetsPrefix}/slider.png`} />
                                            </div>
                                            <div className="slider-section-text">
                                                <p>Lorem Ipsum is simply dummy text</p>
                                                <h2>What is Lorem Ipsum?</h2>
                                                <h4>Lorem Ipsum is simply dummy text </h4>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                            <div className="item">
                                <div className="fill"></div>
                                <Grid>
                                    <div className="carousel-caption">
                                        <div className="mid-cont">
                                            <div className="slider-left">
                                                <img src={`${assetsPrefix}/slider.png`} />
                                            </div>
                                            <div className="slider-section-text">
                                                <p>Lorem Ipsum is simply dummy text</p>
                                                <h2>What is Lorem Ipsum?</h2>
                                                <h4>Lorem Ipsum is simply dummy text </h4>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                            <div className="item">
                                <div className="fill"></div>
                                <Grid>
                                    <div className="carousel-caption">
                                        <div className="mid-cont">
                                            <div className="slider-left">
                                                <img src={`${assetsPrefix}/slider.png`} />
                                            </div>
                                            <div className="slider-section-text">
                                                <p>Lorem Ipsum is simply dummy text</p>
                                                <h2>What is Lorem Ipsum?</h2>
                                                <h4>Lorem Ipsum is simply dummy text </h4>
                                                <a href="#">Shop now</a>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    </div> 
                </React.Fragment>
            )
    }
}
