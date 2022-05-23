import React from "react";
import Button from "./Button";
import "./Navbar.css"

 export function Navbar(props){
 return (
    <nav>
        
        <img src="" alt="" />
        <h1>Say Hello To RreactJS</h1>
        <h4>You will learn how to use the most popular frontend library, and became a super ninja developer</h4>
        <Button linkTo="https://reactjs.org/" prompt="Awesome" ></Button>

        {props.children}
    </nav>
 )   
}