import React from "react";
import "./Header.css"; 
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Header()
{
    return(
          <header><LightbulbIcon style={{ fontSize: '30px' }}/>Note-Keeper</header>
    );
}

export default Header;