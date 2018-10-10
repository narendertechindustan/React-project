import React, {Component} from 'react';
import { assetsPrefix } from '../constants'

import {
Col,
ControlLabel,
Button,
Row,
Grid,
FormControl,
FormGroup
} from 'react-bootstrap';

export default class App extends Component {
        
    render () {
        return <div className="main">     
                	<Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="inner-con">
                					<h1>Contact Us</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                                    Lorem Ipsum.</p>
                                    <form>
                                        <FormGroup>
                                            <ControlLabel>Name</ControlLabel>
                                            <FormControl type="text" placeholder="Enter your name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Email</ControlLabel>
                                            <FormControl type="text" placeholder="Enter your email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Phone Number</ControlLabel>
                                            <FormControl type="number" placeholder="Enter your phone number" />
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Message</ControlLabel>
                                            <FormControl componentClass="textarea" placeholder="Enter your message" />
                                        </FormGroup>
                                        <Button type="submit">Send</Button>
                                    </form>
                					<div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30710983.209769644!2d64.45235976587381!3d20.01273993518969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1539148269606" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                				</div>
                			</Col>
                		</Row>
                	</Grid>
                </div>
    }
}