import React, { Component } from 'react';
import './Hero.css'
import { Col, Button, Container, Row } from 'react-bootstrap';
import Images from '../../Container/Images/Images';



class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className='kyc-hero-bgd'>
                    <div className='wrapper-container-hero'>
                        <Row>
                            <Col sm={6}>
                                <div className="hero-head-txt">
                                    KYC on Blockchain Network<br />
                                    Done More <span className="quick-effect">Quickly & Securly</span>
                                </div>
                                <p className="hero-detail-txt">KYC DApp is powered on a decentralised network of Era Swap.
                         <br />There is no centralized authority to obstructions means
                         <br />inbuilt immutably that makes contained data more trustworthy.
                         </p>
                         <div>
                             <button className="knw-btn">Know Your Customer</button>
                         </div>
                            </Col>
                            <Col sm={6}>
                                <img className="kyc-hero-img" src={Images.path.group}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );

    }
}


export default Hero;