import React, { Component } from 'react';
import './LevelTwo.css'
import Images from '../../Container/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';



class LevelTwo extends Component {
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
                <div className="Kyclevel-container">
                    <h4 className="kyc-heading">KYC Level</h4>

                    <Container>
                        <Col sm={12}>
                            <div className="kyc-white-box">
                                <h4 className="m4-level">Level 2</h4>
                                <h4 className="m4-txt-level">In this level the user will hold Govt.Issued Valid  I'd and page with Details written in hand and get an Image</h4>
                                <Container>
                                    <Row>
                                        <Col>
                                            <label for="formGroupExampleInput">First Name</label>
                                            <div class="input-group">

                                                <div class="input-group-prepend">
                                                    <select class="selectpicker">
                                                        <option>Mr</option>
                                                        <option>Mrs</option>
                                                        <option>Ms</option>
                                                    </select>
                                                </div>
                                                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Middle Name</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Middle Name" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Last Name</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Last Name" />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Date of Birth</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="DD-MM-YY" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Nationality</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nationality" />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Phone Number</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Phone Number" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Place of Birth</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Place of Birth" />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Martial Status</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Martial Status" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">Address</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your residential Address" />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">ID Type</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">ID Number</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your ID Number" />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <form>
                                                <div class="form-group">
                                                    <label for="formGroupExampleInput">User Name</label>
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your User Name" />
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                    <label for="formGroupExampleInput">ID Image Upload here</label>
                                    <p className="note-para">JPG OR PNG file only , Max Size allowed is 2 MB </p>

                                    <div className="flex-choose">
                                        <form className="select-style" action="/action_page.php">
                                            <input type="file" id="myfile" name="myfile" /><br /><br />
                                        </form>
                                    </div>
                                    <Row>
                                        <Col sm={4}>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="border-style-img">
                                                <img className='kycdapp-plus-Img' src={Images.path.plusimg} />
                                            </div>

                                        </Col>
                                    </Row>
                                    <p className="note-txt-red big-font">*Instruction for image with ID.</p>
                                    <div>Please follow the instruction while uploading selfie with ID</div>
                                    <ul>
                                        <li className="instruction-txt"><span className="hex-txt">&#x2022;</span> Write KYC DAPP, Your Name, Your Signature and Date on a plain paper</li>
                                        <li className="instruction-txt"><span className="hex-txt">&#x2022;</span> Hold your ID in right hand and the signed paper with your name in left hand and get a clear image clicked.</li>
                                        <li className="instruction-txt"><span className="hex-txt">&#x2022;</span> Make sure that the info on ID is clearly readable and not hidden under fingers along with your photo on it.</li></ul>
                                    <div className="flex-choose">
                                        <form className="select-style" action="/action_page.php">
                                            <input type="file" id="myfile" name="myfile" /><br /><br />
                                        </form>
                                    </div>
                                    <Row>
                                        <Col sm={4}>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="border-style-img">
                                                <img className='kycdapp-plus-Img' src={Images.path.plusimg} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <label>
                                        <input type="checkbox" id="tc" name="prog" value="" /><span>&nbsp;I hereby confirm that all the information provided are accurate and I agree to the  <a href="/pdf/terms.pdf" target="_blank"><b><u>Terms &amp; conditions</u> | </b></a><a href="/pdf/privacy.pdf" target="_blank"><b><u>Privacy policy</u></b></a></span></label>
                                    <div>
                                        <div className="submit-btn-flex">
                                            <button className="submit-btn">Submit</button>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </Col>
                    </Container>
                </div>
            </div>
        );

    }
}


export default LevelTwo;