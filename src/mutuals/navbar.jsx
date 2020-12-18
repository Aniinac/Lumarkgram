import React from 'react'
import './mStyles/nStyles.css'
import { Heart, HouseDoor } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';


 function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-center ">

            <div className="d-flex">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropDown"
                        aria-controls="navbarNavDropDown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand ml-4 mrnbB" type="button" onClick={() => props.history.push("/")}>
                     <img className="card-img-top lHeader mt-1" src="https://i.ibb.co/C2hkjTj/Lumarkgram.jpg" alt="Lumarkgram" border="0" /> 
                </div>  
            </div>
            <div className="collapse navbar-collapse float-right d-flex d-inline" id="navbarNavDropDown">
                    <input className="nvImput ml-4 h-25 text-center" type="text" 
                            placeholder="Search" aria-label="Search"> 
                    </input>
                    <ul className="navbar-nav">
                        <li className="nav-item active mlNB">
                            <HouseDoor className="iconClassNB1" type="button" onClick={() => props.history.push("/")}/> 
                            <Heart className="iconClassNB1" type="button" onClick={() => props.history.push("/favpage")} />
                            <img src="https://i.ibb.co/cCfsdbD/descarga.jpg" 
                            className="rounded-circle mr-3 userNav" alt="user" 
                            type="button" onClick={() => props.history.push("/userpage")}/>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);