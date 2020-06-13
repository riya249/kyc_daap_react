import React, { Component } from 'react';
import './MyDocument.css'
import Images from '../../Container/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';



class MyDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="kyc-header-color">
                    <img className='kycdapp-Img' src={Images.path.kycdapp} />
                </div>
                <div className="Kycdoc-container">
                    <h4 className="kyc-heading">My Documents</h4>

                    <Container>
                        <Col sm={12}>
                            <div className="kyc-white-box">
                                <div>
                                    <p>Document Types:</p>
                                    <select class="document-picker">
                                        <option>Select Your Document</option>
                                        <option>Govt. issue valid Id proof</option>
                                        <option>Passport</option>
                                        <option>Voter ID</option>
                                        <option>Adhar Card</option>
                                        <option>Driving License</option>
                                        <option>Pan Card</option>
                                        <option>10th Marksheet</option>
                                        <option>12th Marksheet</option>
                                        <option>Birth Certificate</option>
                                        <option>Ration Card</option>
                                        <option>Employee ID card</option>
                                        <option>ITR Document</option>
                                    </select>
                                </div>
                                <div className="flex-choose">
                                    <p className="upload-style">Upload Your Document</p>
                                </div>
                                <div>
                                    <Row>
                                        <Col sm={5}>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="border-style-img">
                                                <label for="file-input">
                                                    <img className='kycdapp-plus-Img' src={Images.path.plusimg} />
                                                </label>
                                                <input id="file-input" type="file" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="submit-btn-flex">
                                        <button className="submit-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Container>

                </div>
            </div>
        );

    }
}


export default MyDocument;