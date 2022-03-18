import '../App.css';

import Header from "./Header";
import Sidebar from "./Sidebar";

function ContainerRegistration() {
    const transitingID = localStorage.getItem('transitingIdInLocalStorage');
    return (
        <div className="dashboard">
            <Header />
            <div className="contain form-contain">
                <div className="col-2 left-menu"><Sidebar /></div>
                <div className="col-10 right-menu user-form">
                    <div className="add-container">
                        <form>
                            <div className="form-title">
                                <div className="rope">
                                    <div className="col indicator"><button class="button1">1</button></div>
                                    <div className="col indicator"><button class="button1" >2</button></div>
                                    <div className="col indicator"><button class="button1" id="button1">3</button></div>
                                    <div className="col indicator"><button class="button1">4</button></div>
                                </div>
                                <h3>Container Transiting Vehicle Registration</h3>
                                <hr></hr>
                                <div className="container-details">
                                    <div><h5>Tracking ID: {transitingID} </h5></div>
                                    <hr style={{
                                        'height': '1px',
                                        'marginRight': '10px'
                                    }}></hr>
                                    <div className="row">

                                        <div className="col"><p className="box">Agent: Infinity Agency</p></div>
                                        <div className="col" style={{ 'paddingRight': '25px' }}><p className="box">Driver: Peter Adebola</p></div>
                                    </div>

                                </div>
                            </div>
                            <br></br>

                            <div class="row mb-3">
                                <label>Transiting Vehicle</label>
                              <div class="col-sm-12">
                              <select class="form-select col-sm-12" aria-label="Default select example">
                                    <option selected>Clearing Agent</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                              </div>

                            </div>
                            <div class="row mb-3">
                                <label>Container Category</label>
                              <div class="col-sm-12">
                              <select class="form-select col-sm-12" aria-label="Default select example">
                                    <option selected>Clearing Agent</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                              </div>

                            </div>
                            <div class="row mb-3">
                                <label>Container Size</label>
                              <div class="col-sm-12">
                              <select class="form-select col-sm-12" aria-label="Default select example">
                                    <option selected>Clearing Agent</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                              </div>

                            </div>
                            <div class="row mb-3">
                                <label>Container Number</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" name="containerNumber" placeholder="Vehicle Number" required />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label>Seal Number</label>
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" name="containerNumber" placeholder="Vehicle Number" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label>Container Status</label>
                              <div class="col-sm-12">
                              <select class="form-select col-sm-12" aria-label="Default select example">
                                    <option selected>Clearing Agent</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
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

export default ContainerRegistration