import React, { useState } from "react";
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    const { name, subMenus, iconClassName, onClick, to, exact } = props  
    const [expand,setExpand] = useState(false);
    return  (
        <li onClick={props.onClick}>
            <NavLink exact to={to} onClick={ () => setExpand(!expand)} className="menu-item">
                <div className="menu-name menu-icon">                    
                    <i className={iconClassName}></i>
                    <span className="main-menu-name"> {name}</span>
                </div>
                
            </NavLink>
            {
              
                <ul className={`sub-menu ${expand ? "active" : ""}`}>
                    {subMenus.map((menu,index) => 
                        
                    
                        <li key={index}>
                            <NavLink to={menu.to}> {menu.name} </NavLink>
                        </li>
                    )}
                </ul>
              
            }            
        </li>

    )
}

export default MenuItem;