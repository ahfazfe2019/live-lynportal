import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home';
// import OrderStatus from './components/orderStatus';
import OrderStatus from './components/Order-management/orderManagement';
import DailySalesReport from './components/dailySalesReport';
import ManualExportSale from './components/manualExportSale';
import ManualExportReturn from './components/manualExportReturn';
import ConfirmOrder from './components/confirmOrder';
import InvoiceRecord from './components/invoiceRecord';
import GwpSetting from './components/gwpSetting';
import GwpProducts from './components/gwpProducts';
import GwpModules from './components/gwpModules';
import ActivityLog from './components/activityLog';
import SideMenu from './components/SideMenu.js';
import SideList from './components/sideList';


const orderManagement = () => {
  return <h1>Order Management</h1>
}

const ExportFile = () => {
  return <h1>Export File</h1>
}

function App() {
  return (
    <div className="App">
      <Router>
        <SideList />
        <div className="container">
          <div className="inner-container">
            <switch>
              <Route path="/" component={Home} />
              <Route path="/orderstatus" component={OrderStatus} />
              <Route path="/dailySalesReport" component={DailySalesReport} />
              <Route path="/manualExportSale" component={ManualExportSale} />
              <Route path="/manualExportReturn" component={ManualExportReturn} />
              <Route path="/confirmOrder" component={ConfirmOrder} />
              <Route path="/invoiceRecord" component={InvoiceRecord} />
              <Route path="/gwpSetting" component={GwpSetting} />
              <Route path="/gwpProducts" component={GwpProducts} />
              <Route path="/gwpModules" component={GwpModules} />
              <Route path="/activityLog" component={ActivityLog} />
            </switch>
          </div>        
        </div>
                
      </Router>
      
    </div>
  );
}

export default App;
