import '../App.css';

function Sidebar() {
    return (
        <div className="row left-menu-row">
       
        <div className="sidebar">
            <div className="side-bar">
                <ul class="list-group">
                <a href="/addtrackingid" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/fluent/48/000000/container-truck.png"/>Container Registration </li></a>
                <a href="/gateincontainers" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/color/48/000000/container-truck.png"/>Gate In Container</li></a>
                <a href="/gateoutcontainers" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/doodle/48/000000/container-truck--v1.png"/>Gate Out Container</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/nolan/64/invoice.png"/>Invoice</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/officel/40/000000/front-gate-closed.png"/>CLV Gate Pass</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/fluent-systems-regular/48/000000/cheque.png"/>Payments</li></a>
                <a href="/#" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img"src="https://img.icons8.com/material-two-tone/50/000000/customs-clearance.png"/>Clearance</li></a>
                <a href="/allagents" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img"src="https://img.icons8.com/offices/30/000000/person-male.png"/>Agents</li></a>
                <a href="/allescort" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/cotton/64/000000/customs-officer--v2.png"/>Escorts</li></a>
                <a href="/alldrivers" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/ultraviolet/40/000000/driver.png"/>Drivers</li></a>
                <a href="/addemployee" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/offices/30/000000/person-male.png"/>Add Employees</li></a>
                <a href="/allemployee" className="side-link"><li class="list-group-item"><img className="side-icon" alt="img" src="https://img.icons8.com/ultraviolet/40/000000/driver.png"/>All Employees</li></a>
                

               
              
                   
                   
                </ul>

     
            </div>
        </div>
       
    </div>

        

        
    );
}

export default Sidebar;