
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from './Container';
import Dashboard from './Dashboard';
import ContainerRegistration from './ContainerRegistration';
import AddAgent from './AddAgent';
import AddDriver from './AddDriver';
import AgentProfile from './AgentProfile';
import AllAgent from './AllAgent';
import ViewAllContainer from './ViewAllContainer';
import AllDrivers from './AllDrivers';
import GateInContainer from './GateInContainer';
import ViewContainerDetails from './ViewContainerDetails';
import ClientDashboard from './ClientDashboard';
import AddEmployee from './AddEmployee';
import AllEmployee from './AllEmployee';
import EmployeeLogin from './EmployeeLogin';
import AddEscort from './AddEscort';
import AllEscort from './AllEscort';
import VehicleRegistration from './VehicleRegistration';
import { ProtectedRoute } from './ProtectedRoute';
import  AddBillLadding  from './AddBillLadding';


function MainPage() {
    return (
        <div>
            <Router>
                
                <Switch>
                    <Route exact path='/'>
                        <Dashboard />
                    </Route>
                    <Route path='/addtrackingid'>
                        <Container />
                    </Route>
                    <Route path='/addemployee'>
                        <AddEmployee />
                    </Route>
                    <Route path='/allemployee'>
                        <AllEmployee />
                    </Route>
                    <Route path='/user.dashboard'>
                        <ClientDashboard />
                    </Route>
                    <Route path='/viewcontainerdetails'>
                        <ViewContainerDetails />
                    </Route>
                    {/* <Route path='/registercontainer'>
                        <ContainerRegistration />
                    </Route> */}
                    <ProtectedRoute exact path ="/app" component={ContainerRegistration}  />
                    
                    <Route path='/addagent'>
                        <AddAgent />
                    </Route>
                    <Route path='/adddriver'>
                        <AddDriver />
                    </Route>
                    <Route path='/agentprofile'>
                        <AgentProfile />
                    </Route>
                    <Route path='/allagents'>
                        <AllAgent />
                    </Route>
                    <Route path='/viewallcontainer'>
                        <ViewAllContainer />
                    </Route>
                    <Route path='/gateincontainers'>
                        <GateInContainer />
                    </Route>
                    <Route path='/alldrivers'>
                        <AllDrivers />
                    </Route>
                    <Route path='/employeelogin'>
                        <EmployeeLogin />
                    </Route>
                    <Route path='/addescort'>
                        <AddEscort />
                    </Route>
                    <Route path='/allescort'>
                        <AllEscort />
                    </Route>
                    <Route path='/vehicleregistration'>
                        <VehicleRegistration />
                    </Route>
                    <Route path='/addbillladding'>
                    <AddBillLadding />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MainPage