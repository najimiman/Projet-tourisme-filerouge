import React from "react";
import { ThemeContext } from "../Context/context";
import { Alert } from "react-bootstrap";
export default function Registre() {
    const { handelregistre, setName, setEmail, setPassword,alertData } = React.useContext(ThemeContext)
    return (
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExampleregistre" aria-labelledby="offcanvasExampleLabel">
             {/* {success && (
                    <Alert className="w-30 p-3 ml-7 mt-2 position-absolute" variant="success">
                        This is a success alert!
                    </Alert>
                )} */}
                {alertData && (alertData[2] === "RegistreError" || alertData[2] === "Registresuccess") && (
                    <Alert variant={alertData[0]} dismissible>
                    {alertData[1]}
                    </Alert>
                )}
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Registre</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="wrapper">
                        <div class="logo">
                        <img src="logo4.jpg" alt="" />
                        </div>
                        <div class="text-center mt-4 name">
                            Registre
                        </div>
                        <div class="p-3 mt-3">
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="text" name="Nom" onChange={(e) => setName(e.target.value)} id="userName" placeholder="Username" />
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-at"></span>
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="password" name="mot de passe" id="pwd" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            <button class="btn mt-3" onClick={() => handelregistre()}>Registre</button>
                        </div>
                        <div class="text-center fs-6">
                            <a href="#">Mot de passe oublié ?</a> ou <a data-bs-toggle="offcanvas" href="#offcanvasExamplelogin" role="button" aria-controls="offcanvasExample">Login</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}