import React, { useEffect, useRef, useState } from "react";
import Typical from "react-typical";
import { Link, NavLink } from "react-router-dom";


const Menu = () => {
  const [show, setShow] = useState(false)
  const links = document.querySelectorAll("nav a");
  
links.forEach(link => {
   link.addEventListener("click", function () {
      links.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
   });
});
const handelclikc=(e)=>{
  const filterValue = e.target.getAttribute('id');
  console.log(filterValue);
  if(filterValue=='city'){
      setShow(true);
    }
    else{
      setShow(false);
    }
}
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="morocco.gif" width="40" height="40" /><span id='mm'> Tourisme^</span><span id="mm">Morocco</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav nav-pills" id="pills-tab" role="tablist" onClick={handelclikc}>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link active" to="/" id="pills-home-tab"  data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link"   to='/city' id="city" data-toggle="pill" data-bs-target="#pills-city" type="button" role="tab" aria-controls="pills-city" aria-selected="false">City</Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" id="pills-plage-tab" to='/beaches' data-bs-target="#pills-plage" type="button" role="tab" aria-controls="pills-plage" aria-selected="false">Beaches</Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"  data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</Link>
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