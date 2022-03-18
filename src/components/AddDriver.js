import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';





function AddDriver() {
  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu"><Sidebar /></div>
        <div className="col-10 right-menu user-form">
          <div className="add-Agent">
            <form>
              <div className="form-title">
                <h3>Driver Registration</h3>
                <hr></hr>
              </div>
              <br></br>

              <div class="row mb-3">
                <label>Name of Driver</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" name="escort" id="driverName" placeholder="Name of Driver" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Address </label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" name="escort" id="address" placeholder="Address" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Phone Number </label>
                <div class="col-sm-12">
                  <input type="text" name="mobile" class="form-control" id="phoneNumber" placeholder="Phone Number" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Email</label>
                <div class="col-sm-12">
                  <input type="email" class="form-control" name="email" id="entryDate" placeholder="Email" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Photo</label>
                <div class="col-sm-12">
                  <input type="file" class="form-control" name="photo" id="driverPhoto" placeholder="Upload photo" accept="image/png, image/jpg, image/jpeg" />
                </div>
              </div>
              <div class="row mb-3">
                <label>Upload Driver's License</label>
                <div class="col-sm-12">
                  <input type="file" class="form-control" name="photo" id="driverLicense" placeholder="Upload photo" accept="image/png, image/jpg, image/jpeg" />
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

export default AddDriver