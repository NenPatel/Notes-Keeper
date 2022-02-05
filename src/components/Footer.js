import React from "react";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();
// 

function Footer()
{
    return(
        <footer>Copyright &copy; {year} Nen Patel </footer>
    );
}

export default Footer;