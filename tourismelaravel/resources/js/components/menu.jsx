import React, { useEffect, useRef, useState } from "react";
// import ityped from 'ityped';
// import { init } from 'ityped';
// import "./css/Home.css";

import Typical from "react-typical";

import { Link, NavLink } from "react-router-dom";
// import { render } from "@testing-library/react";
// import axios from "axios";
// const activeTab = (history, path) => {
  
//   if (history.location.pathname === path) {
//     return { color: "red" };
//   }
// };

const Menu = () => {
  // console.log(history);
  const [show,setShow]=useState(false)
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#"><img src="morocco.gif" width="40" height="40" /><span id='mm'> Tourisme^</span><span id="mm">Morocco</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <Link class="nav-link active" to="/" id="pills-home-tab"  data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" onClick={()=>setShow(true)}  id="pills-profile-tab" data-toggle="pill" data-bs-target="#pills-city" type="button" role="tab" aria-controls="pills-city" aria-selected="false">City</Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" to='/city' data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</Link>
                </li>

                <li class="nav-item" role="presentation">
                  <Link class="nav-link" id="pills-disabled-tab"  data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Disabled</Link>
                </li>
                {show?<li class="nav-item" role="presentation">
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                </li>:null}
              </ul>
            </div>
          </div>
        </nav>



      </div>
    );
};
export default Menu;