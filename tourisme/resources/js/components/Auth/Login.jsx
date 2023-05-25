import React from "react";
import { ThemeContext } from "../Context/context";
export default function Login() {
    const { handellogin,setEmail,setPassword} = React.useContext(ThemeContext)
        return (
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExamplelogin" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="wrapper">
                            <div class="logo">
                                <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                            </div>
                            <div class="text-center mt-4 name">
                                Twitter
                            </div>
                            <div class="p-3 mt-3">
                            <div class="form-field d-flex align-items-center">
                                    <span class="fas fa-at"></span>
                                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </div>
                                <div class="form-field d-flex align-items-center">
                                    <span class="fas fa-key"></span>
                                    <input type="password" name="password" id="pwd" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                                </div>
                                <button class="btn mt-3" onClick={()=>handellogin()} >Login</button>
                            </div>
                            <div class="text-center fs-6">
                                <a href="#">Forget password?</a> or <a data-bs-toggle="offcanvas" href="#offcanvasExampleregistre" role="button" aria-controls="offcanvasExample">Registre</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    
}