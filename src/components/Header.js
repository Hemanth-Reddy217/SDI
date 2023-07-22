import React from 'react'


function Header(){

    return(
        <div class="p-3 bg-light border border-black  border-start-10 rounded-pill">
    <ul className="nav justify-content-end nav-underline  fs-3">
        <li className="nav-item ">
            <a className="nav-link  " aria-current="page" href="#">
            Active
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
            about
            </a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link ">Login</a>
        </li>
    </ul>


        </div>
    );

}

export default Header;