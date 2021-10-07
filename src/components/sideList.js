import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useHistory } from 'react-router-dom';

export default function SideList() {
    const [open, setOpen] = React.useState(true);
    const [openExport, setOpenExport] = React.useState(true);
    const [openWarehouse, setOpenWarehouse] = React.useState(true);
    const [openInvoice, setOpenInvoice] = React.useState(true);
    const [openGwp, setOpenGwp] = React.useState(true);
    const [openOther, setOpenOther] = React.useState(true);

    const history = useHistory();
  const orderClick = () => {
    setOpen(!open);
  };
  const exportClick = () => {
    setOpenExport(!openExport);
  };
  const warehouseClick = () => {
    setOpenWarehouse(!openWarehouse);
  };
  const invoiceClick = () => {
    setOpenInvoice(!openInvoice);
  };
  const gwpClick = () => {
    setOpenGwp(!openGwp);
  };

  const otherClick = () => {
    setOpenOther(!openOther);
  };

  const exportMenuItem = [
    {
      text : "Daily Sales Report",
      icon : <StarBorder color="secondary" />,
      path : '/dailySalesReport'
    },
    {
      text : "Manual Export Sale File",
      icon : <StarBorder color="secondary" />,
      path : '/manualExportSale'
    },
    {
      text : "Manual Export Return File",
      icon : <StarBorder color="secondary" />,
      path : '/manualExportReturn'
    }
  ]

  const gwpMenuItem = [
    {
      text : "GWP Settings",
      icon : <StarBorder color="secondary" />,
      path : '/gwpSetting'
    },
    {
      text : "GWP Products",
      icon : <StarBorder color="secondary" />,
      path : '/gwpProducts'
    },
    {
      text : "GWP Modules",
      icon : <StarBorder color="secondary" />,
      path : '/gwpModules'
    }
  ]
  return (
    <div className="side-menu">
      <div className="side-barlist">
        
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={orderClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Order Managment" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              sx={{ pl: 4 }}
              onClick={() => history.push('/orderstatus')}
              >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Order Status" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={exportClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Export File" />
          {openExport ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openExport} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          {/* List links */}
          {exportMenuItem.map(item => (
              <ListItemButton 
                sx={{ pl: 4 }}
                onClick={() => history.push(item.path)}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
          ))
          }          
          </List>
        </Collapse>

        <ListItemButton onClick={warehouseClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Warehouse Managment" />
          {openWarehouse ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openWarehouse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              sx={{ pl: 4 }}
              onClick = {() => history.push("confirmOrder")}
              >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Confirm Order" />            
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={invoiceClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Invoice and Billing Management" />
          {openInvoice ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openInvoice} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton 
              sx={{ pl: 4 }}
              onClick = {() => history.push("invoiceRecord")}
              >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Invoice Records" />            
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={gwpClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="GWP" />
          {openGwp ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openGwp} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

          {/* GWP List */}
          {gwpMenuItem.map(item => (
            <ListItemButton 
              sx={{ pl: 4 }}
              onClick = {() => history.push(item.path)}
              >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />            
                          
            </ListItemButton>
          ))}          
          </List>
        </Collapse>
        
        <ListItemButton onClick={otherClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Others" />
          {openOther ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOther} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}
              onClick = {() => history.push("activityLog")}
              >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Activity Log" />            
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      </div>
    </div>
  );
}
