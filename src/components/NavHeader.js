import React from 'react';
import { NavLink } from 'react-router-dom';


export const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-center bg-primary header" >
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="mainNav">
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown </a>
                            <div className="dropdown-menu dropdown" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/leftSidebar">Left Sidebar</NavLink>
                        <NavLink className="nav-item nav-link logo" activeClassName="active" exact to="/home">Telephasic</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/rightSidebar">Right Sidebar</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/noSidebar">No Sidebar</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};



export default HeaderNav;
