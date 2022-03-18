import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';





function AddAgent() {
  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu"><Sidebar /></div>
        <div className="col-10 right-menu user-form">
          <div className="add-Agent">
            <form>
              <div className="form-title">
                <h3>Add Agent Details</h3>
                <hr></hr>
              </div>
              <br></br>

              <div class="row mb-3">
                <label>Name of Agent Company</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" name="escort" id="escortName" placeholder="Name of Agent" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Name of Agent Contact </label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" name="escort" id="escortName" placeholder="Name of Agent Company" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Phone Number </label>
            
                <div class="col-sm-12">
                  <input type="text" name="mobile" class="form-control" id="agentId" placeholder="Phone Number" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Email</label>
                <div class="col-sm-12">
                  <input type="email" class="form-control" name="date" id="entryDate" placeholder="Email" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Upload Government Permit Document</label>
                <div class="col-sm-12">
                  <input type="file" class="form-control" name="escort" id="escortName" placeholder="Upload" required/>
                </div>
              </div>


              <button type="submit" class="btn tracking-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AddAgent