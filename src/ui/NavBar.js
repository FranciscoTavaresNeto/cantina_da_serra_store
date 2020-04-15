import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"><img src="#" alt="Logo" /></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Clientes VIP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Maiores Vendas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Clientes Mais Fiéis</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Recomendações</a>
                </li>
            </ul>
        </nav> 
    );
};

export default NavBar;