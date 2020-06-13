import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Images from '../../Container/Images/Images';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="header-bgd-color">
       <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <a class="navbar-brand" href="#"> <img className='kycdapp-Img'  src={Images.path.kycdapp} /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
        <a class="nav-link bgd-color-nav" href="/">
        Connect To wallet
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link bgd-color-nav" href="/Myticket">
         Create Wallet
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle bgd-color-nav " id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Verify KYC Key
         <span class="sr-only">(current)</span></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op1}/>
          <a class="dropdown-item" href="/Myaccount">My Account</a>
          </div>
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op2}/>
            <a class="dropdown-item" href="/MyDocument">My Documents</a>
          </div>
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op4}/>
            <a class="dropdown-item" href="/">KYC Public and Private Info </a>
          </div>
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op5}/>
            <a class="dropdown-item" href="/">KYC Status</a>
          </div>
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op6}/>
            <a class="dropdown-item" href="/MyKyckey">My KYC key</a>
          </div>
          <div className="drop-flex-img">
       
            <a class="dropdown-item" href="/kyclevel">KYC Level</a>
          </div>
          <div className="drop-flex-img">
            <img className="drop-img-kyc" src={Images.path.op3}/>
            <a class="dropdown-item" href="/">Express KYC </a>
          </div>
          <div className="drop-flex-img">
            
            <a class="dropdown-item" href="/">Become a Conservator</a>
          </div>
       
        </div>
      </li>
    </ul>
  </div>
</nav>

      </div>

    );

  }
}


export default Header;