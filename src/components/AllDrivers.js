import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function AllDrivers() {
  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu"><Sidebar /></div>
        <div className="col-10 right-menu user-form all-agent-body">
         
<h3>All Drivers</h3>
<hr></hr>
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                   
                </tr>
                <tr>
                    <td>Peter prince</td>
                    <td>0908760432</td>
                    <td>Edinburh@gmail.com</td>
                
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                   
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                   
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>09087654321</td>
                    <td>Edinburgh@gmail.com</td>
                </tr>
                
            </tbody>
        </table>
        </div>
      </div>
    </div>

  );
}

export default AllDrivers