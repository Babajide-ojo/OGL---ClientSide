import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';





function AddEscort
() {
  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu"><Sidebar /></div>
        <div className="col-10 right-menu user-form">
          <div className="add-Agent">
            <form>
              <div className="form-title">
                <h3>Escort Registration</h3>
                <hr></hr>
              </div>
              <br></br>

              <div class="row mb-3">
                <label>Name of Escort</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" name="escort" id="EscortName" placeholder="Name of Escort" />
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
                  <input type="file" class="form-control" name="photo" id="EscortPhoto" placeholder="Upload photo" accept="image/png, image/jpg, image/jpeg" />
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

export default AddEscort
