import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/logo1.png';
import user from  '../assets/logo/users.png';
import MenuItem from './MenuItem';


const menuItems = [
    { 
        name : 'Order Management',
        to :'/',
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:"Order Status", to:"Order-managment/orderStatus"}]
    },
    {
        name : 'Export File',
        to :"/lyn_exportfile",
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:"Daily Sales Report",to:"lyn_exportfile/dailySalesReport"},{name:"Manual Export Sale File",to:"lyn_exportfile/manualExportSalesFile"},{name:"Manual Export retun File",to:"lyn_exportfile/manualExportReturnFile"}],
    },
    {
        name : 'Warehouse Management', 
        to:"/lyn_warehouseMang",
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:"Confirm Order",to:"lyn_warehouseMang/confirmOrder"}],
    },
    {
        name : 'Invoice Biling Management',
        to :"/lyn_invoiceBilingMang",
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:"Invoice Record",to:"lyn_invoiceBilingMang/invoiceBillingManagement"}],
    },
    {
        name : 'GWP', 
        to:"/lyn_gwp",
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:"GWP Setting",to:"lyn_gwp/gwpSetting"},{name:"GWP Product",to:"lyn_gwp/gwpProduct"},{name: "GWP Report Module",to:"lyn_gwp/gwpReportModule"}],
    },
    {
        name : 'Others', 
        to:"/lyn_other",
        iconClassName : "bi bi-cart-plus-fill",
        subMenus : [{name:   "Activity log",to:"lyn_other/activityLog"}],
    }
];

const SideMenu = (props) => {
    const [inactive,setInactive] = useState(false) ;

    useEffect(() => {
        if(inactive){
         document.querySelectorAll('.sub-menu').forEach(el => {
             el.classList.remove('active');
         })
        }
        props.onCollaps(inactive);
    }, [inactive] )
  return (
    <div className="App">
      <div className={`side-menu ${inactive ? "inactive" : ""} `}>
        <div className="top-section">
            <div className="logo">
                <img src={logo} />
            </div>
            <div onClick={() =>  setInactive(!inactive) } className="toggle-menu-btn">
                {inactive ? (
                    <i className="bi bi-arrow-right-square-fill"></i>
                ) : ( 
                    <i className="bi bi-arrow-left-square-fill"></i> 
                )}
                
            </div>

            <div className="search-controller">
                <button className="search-btn">
                    <i className="bi bi-search"></i>
                </button>                
                <input type="text" placeholder="Search" />
            </div>

            <div className="devider"></div>

            <div className="main-menu">
                <ul>

                    {
                    menuItems.map((menuItem, index) => (                        
                        <MenuItem 
                            key={index}
                            name={menuItem.name}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus}
                            iconClassName={menuItem.iconClassName}
                            onClick={() => {
                                if(inactive){
                                    setInactive(false);
                                }
                            }}
                        />
                        ))
                    }                    
                </ul>
            </div>
        </div>
      </div>

      <div className="side-menu-footer">
          <div className="avatar">
              <img src={user} />
          </div>
          <div className="user-info">
              <h5>Verona Marble</h5>
              <p>info@vmcstone.com</p>
          </div>

      </div>
    </div>
  );
}

export default SideMenu;