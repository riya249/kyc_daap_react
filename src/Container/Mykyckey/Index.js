import React, { Component } from 'react';
import './MyKyckey.css'
import Images from '../../Container/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCopy } from '@fortawesome/free-solid-svg-icons'


class MyKyckey extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }

    render() {
        return (
            <div>
                <div className="kyc-header-color">
                    <img className='kycdapp-Img' src={Images.path.kycdapp} />
                </div>
                <div className="Kycdoc-container">
                    <h4 className="kyc-heading">My KYC Key</h4>
                    <Container>
                        <div className="kyc-wh-box">
                            <div className="kyc-red-box">
                               
                                <p className="txt-wallt">To Share Your KYC Hash:</p>
                                <div className="wallet-display">
                                <div className="wallet-add-box">
                                    <textarea
                                        className='red-mb-txt'
                                        ref={(textarea) => this.textArea = textarea}
                                        value='wallet address'
                                    />
                                </div>
                                <FontAwesomeIcon icon={faCopy} color='#fff' onClick={() => this.copyCodeToClipboard()} />
                            </div>
                            </div>
                            <div>
                                <div className="share-flex-box">
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.twiitr} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.fb} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.Whatsapp} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.linkdin} />
                                    </div>
                                </div>

                                <div className="share-flex-box">
                                    <div >
                                        <img className='kycdapp-share-Img' src={Images.path.skype} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.pinintrst} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.reddit} />
                                    </div>
                                    <div>
                                        <img className='kycdapp-share-Img' src={Images.path.telegram} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>

                </div>
            </div>
        );

    }
}


export default MyKyckey;