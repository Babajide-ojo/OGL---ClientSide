import '../App.css';
import Sidebar from './Sidebar';

function VehicleRegistrationForm({ trackingID, vehicleNumber, driver, handleTrackingID, handleVehicle, handleDriver, handleSubmitForm ,handleRedirect }) {
    return (
        <div className="contain form-contain">
            <div className="col-2 left-menu"><Sidebar /></div><hr></hr>
            <div className="col-10 right-menu user-form">
                <div className="add-Agent">
                    <form >
                        <div className="form-title">
                            <div className="rope">
                                <div className="col indicator"><button class="button1">1</button></div>
                                <div className="col indicator"><button class="button1" id="button1">2</button></div>
                                <div className="col indicator"><button class="button1">3</button></div>
                                <div className="col indicator"><button class="button1">4</button></div>
                            </div>
                            <br></br>
                            <h3>TRANSITING VEHICLE REGISTRATION</h3>
                            <hr></hr>
                        </div>

                        <br></br>
                        <div class="row mb-3">
                            <label>Transiting ID</label>
                            <div class="col-sm-12">
                                <input value={trackingID} name="trackingID" disabled onChange={handleTrackingID} />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label>Vehicle Number</label>
                            <div class="col-sm-12">
                                <input
                                required
                                    value={vehicleNumber}
                                    type="text"
                                    class="form-control"
                                    name="escort" id="escortName"
                                    placeholder="Name of Agent"
                                    onChange={handleVehicle} />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label>Name of Driver</label>
                            <div class="col-sm-12">
                                <select 
                                required
                                value={driver} 
                                onChange={handleDriver} 
                                class="form-select col-sm-12" 
                                aria-label="Default select example" 
                                name="driver">
                                    <option selected>one</option>
                                    <option>two</option>

                                </select>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label>Vehicle Status</label>
                            <div class="col-sm-12">
                                <select class="form-select col-sm-12" aria-label="Default select example" name="vehicleStatus">
                                    <option selected>one</option>
                                    <option>two</option>

                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label>Gate Pass Issued Date</label>
                                <input type="date" class="form-control" name="gatePassIssuedDate" id="entryDate" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label>Gate Pass Expiry Date</label>
                                <input type="date" class="form-control" name="gatePassExpiryDate" id="entryDate" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <label>Exit Date</label>
                                <input type="date" class="form-control" name="date" id="entryDate" />
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div className="col-sm-6">
                                <button type="submit" class="btn tracking-btn" onClick={handleSubmitForm} >Add Another Vehicle</button>
                            </div>
                            <div className="col-sm-6 left-button">
                                <button type="" class="btn tracking-btn"  onClick={handleRedirect}>Next Process</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default VehicleRegistrationForm