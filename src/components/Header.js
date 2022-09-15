import React from "react";
import '../index.css';
import logo from '../Sprout Logo.JPG'
function Header() {
    return(
        <nav className="nav-bar">
            <ul className="logo">
                <li><img src={logo} alt="Sprout Logo"/></li>
            </ul>
            <ul className="options">
                <li>My Request<i class="fa fa-sort-desc sort-logo" aria-hidden="true"></i></li>
                <li>My Team<i class="fa fa-sort-desc sort-logo" aria-hidden="true"></i></li>
                <li>Company<i class="fa fa-sort-desc sort-logo" aria-hidden="true"></i></li>
                <li>Administration Tools<i class="fa fa-sort-desc sort-logo" aria-hidden="true"></i></li>
                <li>Maintenance<i class="fa fa-sort-desc sort-logo" aria-hidden="true"></i></li>   
                <li><textarea class="employee-search" placeholder="employee search"></textarea><i class="fa fa-search search-logo" aria-hidden="true"></i></li>
                <li><i class="fa fa-bell bell-logo" aria-hidden="true"></i></li>       
                <li><i class="fa fa-circle profile-logo" aria-hidden="true"></i></li>
                <li className="adminli">Admin<i class="fa fa-sort-desc sort-logo-blue" aria-hidden="true"></i></li>
            </ul>
        </nav>
    )
}

export default Header