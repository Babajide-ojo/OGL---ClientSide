import logo from '../logo.svg'
import '../App.css';
import Sidebar from './Sidebar';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main'
import Container from './Container';

function Dashboard() {
    return (
  
            <div className="dashboard">
                <Header />
                <div className="contain">
                    <div className=" left-menu"><Sidebar /></div>
                    <div className=" right-menu"><Main /></div>
                </div>
               
            </div>


    );
}

export default Dashboard;
