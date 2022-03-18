import React from 'react';
import '../App.css';
function AddContainer() {
  const [transitingId, setTransitingId] = React.useState(
    localStorage.getItem('transitingIdInLocalStorage') || ' '
  );

  

  React.useEffect(()=>{
    localStorage.setItem('transitingIdInLocalStorage', transitingId, [transitingId])
  })

  const onChange = event => setTransitingId(event.target.value)
  return (
    <div className="add-containe">
  
      <form>
        <div className="form-title">
          <div className="rope">
            <div className="col indicator"><button class="button1" id="button1">1</button></div>
            <div className="col indicator"><button class="button1">2</button></div>
            <div className="col indicator"><button class="button1">3</button></div>
            <div className="col indicator"><button class="button1">4</button></div>
          </div>
          <br></br>
          <h3>Transiting ID Creation</h3>
          <hr></hr>
        </div>
        <br></br>
        <div class="row mb-3">
          <label>Transiting ID</label>
          <div class="col-sm-12">
            <input type="text"onChange={onChange} class="form-control" name="transitingId" id="transitingID"  />
          </div>
        </div>
        <div class="row mb-3">
          
          <div class="col-sm-6">
          <label>Name of Clearing Agent</label>
            <select class="form-select col-sm-12" aria-label="Default select example">
              <option selected>Clearing Agent</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          
          <div class="col-sm-6">
          <label>Name of Escort</label>
            <select class="form-select col-sm-12" aria-label="Default select example">
              <option selected>Escort</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        
          
        </div>
        <div class="row mb-3">
        
          <div class="col-sm-6">
          <label>Transisting Status </label>
            <select class="form-select col-sm-12" aria-label="Default select example">
              <option selected>Processing</option>
              <option value="1">Complete</option>
              
            </select>
          </div>
         
          <div class="col-sm-6">
          <label>Entry Date</label>
            <input type="date" class="form-control" name="date" id="entryDate" />
          </div>
        </div>
        <div class="row mb-3">
          <label>Handling Document Image</label>
          <div class="col-sm-12">
            <input type="file" class="form-control" name="file" id="driverPhoto" placeholder="Upload document" />
          </div>
        </div>
        <div class="row mb-3">
          <label>Exit Note Image</label>
          <div class="col-sm-12">
            <input type="file" class="form-control" name="photo" id="driverPhoto" placeholder="Upload document" accept="image/png, image/jpg, image/jpeg" />
          </div>
        </div>
        <div class="row mb-3">
        <label>Invoice Created</label>
        <div class="col-sm-12">
            <select class="form-select col-sm-12" aria-label="Default select example">
              <option selected>True</option>
              <option>False</option>
             
            </select>
          </div>
        </div>
       

        <button type="submit" class="btn tracking-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddContainer