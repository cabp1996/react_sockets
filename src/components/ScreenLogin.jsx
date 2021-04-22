import React from 'react'
import '../styles/login_style.css'

export const ScreenLogin = () => {
    return (
        <div className="container mt-5">
            <div className="login-wrap">

                <div className="login-html">
                    <div className="imageContainer">
                        <img src="assets/img/login_icon.png" height="45" width="45" alt="login_icon" />
                        <h4>Delivery App</h4>
                        <hr/>
                    </div>

                    <div className="login-form">
                        <div className="group">
                            <label for="user" className="label">Username</label>
                            <input id="user" type="text" className="input"
                                autoComplete="off"
                            />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password"
                                autoComplete="off"
                            />
                        </div>
                        <button className="btn btn-block btn-primary button">
                            <i className="fa fa-sign-in"> Iniciar Sesión</i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}
