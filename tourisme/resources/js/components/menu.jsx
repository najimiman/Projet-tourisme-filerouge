import React, { useEffect, useRef, useState } from "react";
import Typical from "react-typical";
import { Link, NavLink } from "react-router-dom";
import Login from "./Auth/Login";
import City from "./city/City";
import { ThemeContext } from "./Context/context";
import Favorite from "./Favorite/favorite";


const Menu = () => {
  const links = document.querySelectorAll("nav a");
  const { handelclikc, show, handelfilter, avatar, handelelogout ,count} = React.useContext(ThemeContext)


  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="morocco.gif" width="40" height="40" /><span id='mm'> Tourisme^</span><span id="mm">Morocco</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" onClick={handelclikc}>
            <ul class="navbar-nav nav-pills" id="pills-tab" role="tablist" >
              <li class="nav-item" role="presentation">
                <Link class="nav-link active" to="/" id="home" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/city' id="city" data-toggle="pill" data-bs-target="#pills-city" type="button" role="tab" aria-controls="pills-city" aria-selected="false">City</Link>
              </li>
              <li class="nav-item" role="presentation">
                <Link class="nav-link" id="plages" to='/beaches' data-bs-target="#pills-plage" type="button" role="tab" aria-controls="pills-plage" aria-selected="false">Beaches</Link>
              </li>
              <li class="nav-item" role="presentation">
                <Link class="nav-link" id="contact" to="/comment" data-bs-toggle="pill-contact" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Comment</Link>
              </li>
              
              <li class="nav-item" role="presentation">
                <Link class="nav-link btn btn-outline-primary waves-effect position-relative" id="favorite" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalfavorite">Favorite <span class="badge text-bg-secondary">
                  {count}+
                  {/* <span class="visually-hidden">unread messages</span> */}
                </span></Link>
              </li>
              <Favorite />
              {/* {show?<li class="nav-item dropdown" role="presentation">
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>

                  <ul class="dropdown-menu" id="list city">
                    <li><a class="dropdown-item" href="#">Essaouira</a></li>
                    <li><a class="dropdown-item" href="#">Dakhla</a></li>
                    <li><a class="dropdown-item" href="#">Nador</a></li>
                  </ul>
                </div>
                </li>:null} */}
              <li class="nav-item dropdown" role="presentation">
                {show ? <div class="dropdown">
                  <select class="btn btn-secondary dropdown-toggle" onChange={(e) => handelfilter(e.target.value)} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'white', color: 'black' }}>
                    <option value="vide">name city</option>
                    <option value="Essaouira" class="dropdown-item">Essaouira</option>
                    <option value="Dakhla" class="dropdown-item">Dakhla</option>
                    <option value="Nador" class="dropdown-item">Nador</option>
                    <option value="Sidi El Bachir" class="dropdown-item">Sidi El Bachir</option>
                    <option value="Saidia" class="dropdown-item">Saidia</option>
                    <option value="Tétouan" class="dropdown-item">Tétouan</option>
                    <option value="Tanger" class="dropdown-item">Tanger</option>
                    <option value="Guelmim" class="dropdown-item">Guelmim</option>
                    <option value="Al-Hoceima" class="dropdown-item">Al-Hoceima</option>
                    <option value="Oualidia" class="dropdown-item">Oualidia</option>
                    <option value="Sidi Ifni" class="dropdown-item">Sidi Ifni</option>
                    <option value="Agadir" class="dropdown-item">Agadir</option>
                    <option value="Marrakech" class="dropdown-item">Marrakech</option>
                    <option value="Fès" class="dropdown-item">Fès</option>
                    <option value="Meknès" class="dropdown-item">Meknès</option>
                    <option value="Rabat" class="dropdown-item">Rabat</option>
                  </select>
                </div> : null}
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="Auth" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Auth
                </a>
                <ul class="dropdown-menu">

                  <li><a class="dropdown-item" data-bs-toggle="offcanvas" href="#offcanvasExamplelogin" role="button" aria-controls="offcanvasExample">Login</a></li>
                  <li><a class="dropdown-item" data-bs-toggle="offcanvas" href="#offcanvasExampleregistre" role="button" aria-controls="offcanvasExample">Registre</a></li>
                  <li><a class="dropdown-item" onClick={handelelogout}>Logout</a></li>

                </ul>
              </li>
              {/* data-label='DC' */}
              {avatar ? <div class='avatar'><span id='textavatar'>{avatar.charAt(0)}</span></div> : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Menu;