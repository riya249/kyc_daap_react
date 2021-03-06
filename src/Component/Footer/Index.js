import React, { Component } from 'react';
import './Footer.css'
import Images from '../../Container/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';



class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="Footer-wrapper-container">

                    <div className="Footer-container">

                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <img className="logo-img-style" src={Images.path.kycdapwhite} />
                                    <p className="logo-sub-txt">The main objectives of the project are to meet the needs of Digital assests projects and users, and to provide access to Required. </p>
                                </Col>
                                <Col sm={4}>
                                    <p className="footer-head">Useful Link</p>
                                    <ul>
                                        <li><a className="footer-sub">How it works</a></li>
                                        <li><a className="footer-sub">Features</a></li>
                                        <li><a className="footer-sub">Verification</a></li>
                                        <li><a className="footer-sub">Roadmap</a></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <p className="footer-head">Documents</p>
                                    <ul>
                                        <li><a className="footer-sub">Whitepaper</a></li>
                                        <li><a className="footer-sub">Privacy Policy</a></li>
                                        <li><a href="#" className="footer-sub">Terms of Use</a></li>

                                    </ul>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                    <div className="bottom-footer">
                        <div className="Footer-container">
                            <Container>
                            <Row>

                                <Col sm={6}>
                                    <p class="logo-sub-para">© <a class="footer-sub">Eraswap</a> 2020  | All rights reserved</p>
                                </Col>

                                <Col sm={6}>
                                    <div className="footer-social-flex">
                                        <img className="social-img-footer" src={Images.path.grpfb} />
                                        <img className="social-img-footer" src={Images.path.whitetwt} />
                                        <img className="social-img-footer" src={Images.path.whIn} />
                                        <img className="social-img-footer" src={Images.path.whtinsta} />
                                        <img className="social-img-footer" src={Images.path.utubwht} />
                                    </div>
                                </Col>

                            </Row>
                            </Container>
                        </div>
                    </div>

                </div>
            </div>

        );

    }
}


export default Footer;