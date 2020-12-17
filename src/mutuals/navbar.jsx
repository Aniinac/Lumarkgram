//import { Link } from 'react-router-dom';
import React from 'react'
import './mStyles/nStyles.css'
import { Heart, HouseDoor } from 'react-bootstrap-icons';
import { withRouter } from 'react-router';
//import { withRouter } from 'react-router';

 function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <div className="navbar-brand mr-100" type="button" onClick={() => props.history.push("/")}>
                     <img className="card-img-top lHeader mt-1" src="https://i.ibb.co/C2hkjTj/Lumarkgram.jpg" alt="Lumarkgram" border="0" /> 
                </div>  
                <div className="collapse navbar-collapse" id="navbarNav">
                  <input className="nvImput ml-auto" type="text" placeholder="Search" aria-label="Search"></input>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">

                            <HouseDoor className="iconClass" type="button" onClick={() => props.history.push("/")}/> 
                            <Heart className="iconClass" type="button" onClick={() => props.history.push("/favpage")} />
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