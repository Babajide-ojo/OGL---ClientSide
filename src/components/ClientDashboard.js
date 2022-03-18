import logo from '../logo.svg'
import '../App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main'
import Container from './Container';
import Header from './Header';

function ClientDashboard() {
    return (
  
            <div className="dashboard">
            <div class="header">
                <div class="row">
                    <div className="col-3 company-title"><img src={logo} className="logo" alt="image" /><h6 className="company-name">OGL ENTERPRISES</h6></div>

                    <div class="col-7">
                        {/* <input class="search-field" type="search" placeholder="search..." />  */}
                    </div>

                    <div class="col-2 end-div">
                        <div class="profile">
                            <div class="dropdown">
                                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  Manage
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="profile-id">
                                    <li><a class="dropdown-item" href="#">My profile</a></li>
                                    <li><a class="dropdown-item" href="#">Change Password</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
                <div className="contain">
                    <div className="col-2 left-menu">
                    <div className="sidebar">
            <div className="side-bar">
                <ul class="list-group">
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/fluent/48/000000/container-truck.png"/>Gate In Containers </li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/doodle/48/000000/container-truck--v1.png"/> Gate Out Container</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/nolan/64/invoice.png"/>View All Invoices</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/officel/40/000000/front-gate-closed.png"/>CLV Gate Pass</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/fluent-systems-regular/48/000000/cheque.png"/>Payments</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img"src="https://img.icons8.com/material-two-tone/50/000000/customs-clearance.png"/>Clearance</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img"src="https://img.icons8.com/offices/30/000000/person-male.png"/>Agents</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/cotton/64/000000/customs-officer--v2.png"/>Escorts</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/ultraviolet/40/000000/driver.png"/>Drivers</li></a>   
             </ul>
            </div>
        </div>
                    </div>
                    <div className="col-10 right-menu">
                    <div >
                <div className="row user-information">
                    <div className="col-6 user-name">welcome (Name-of-Agent-Company)</div>
                  
                </div>
            </div>
            <div className="main-body row">
                <div className="main-body-item col" >
                    <div class="card " id="main1" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/dusk/64/000000/truck.png" className="main-icon" />
                        </div>

                        <div class="card-body">
                            <h6>View Containers</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item col" href="google.com"  >
                    <div class="card " id="main2" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/cotton/64/000000/customs-officer--v2.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>View Escorts</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item col">
                    <div class="card " id="main3" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/offices/30/000000/person-male.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>View Agents</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item col" >
                    <div class="card " id="main4" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/ultraviolet/40/000000/driver.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>View Drivers</h6>
                        </div>
                    </div>
                </div>



            </div>
            <div className="main-body2 row">
                <div className="main-body-item-2 col" >
                    <div class="card second-row" id="main5" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/nolan/64/invoice.png" className="main-icon" />
                        </div>

                        <div class="card-body ">
                            <h6>View Invoices</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item-2 col"  >
                    <div class="card second-row" id="main6" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/fluent-systems-regular/48/000000/cheque.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>View Payments</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item-2 col">
                    <div class="card second-row" id="main7" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/fluent/48/000000/car-insurance-card.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>View Demurrage</h6>
                        </div>
                    </div>
                </div>
                <div className="main-body-item-2 col" >
                    <div class="card second-row" id="main8" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/material-two-tone/50/000000/customs-clearance.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>View Clearance</h6>
                        </div>
                    </div>
                </div>



            </div>
            <div>
                <div>
                    <hr className="line" />
                    <div className="row charts">
                        <div className="col">
                        <div id="piechart"></div>

                        </div>
                        <div className="col">
                        <div id="barchart"></div>   

                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
               
            </div>


    );
}

export default ClientDashboard;
