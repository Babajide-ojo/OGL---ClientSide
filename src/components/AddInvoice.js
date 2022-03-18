import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';





function AddInvoice() {
  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu"><Sidebar /></div>
        <div className="col-10 right-menu user-form">

        </div>
      </div>
    </div>

  );
}

export default AddInvoice