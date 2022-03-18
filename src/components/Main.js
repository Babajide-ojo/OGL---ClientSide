import '../App.css';
import Container from "./Container";

function Main() {
    return (
        <div>
            <div >
                <div className="row user-information">
                    <div className="col-6 user-name">welcome Babajide!</div>
                    <div className="col-6 user-role">Role: Accountant</div>
                </div>
            </div>
            <div className="main-body row">
               <a href="/addtrackingid"  className="main-body-item col" > <div >
                    <div class="card " id="main1" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/dusk/64/000000/truck.png" className="main-icon" />
                        </div>

                        <div class="card-body">
                            <h6>Add Container</h6>
                        </div>
                    </div>
                </div></a>
                <a href="" className="main-body-item col">
                <div >
                    <div class="card " id="main2" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/cotton/64/000000/customs-officer--v2.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>Add Escort</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="/addagent" className="main-body-item col" >
                <div>
                    <div class="card " id="main3" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/offices/30/000000/person-male.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>Add Agent</h6>
                        </div>
                    </div>
                </div>
                </a>
               <a href="/adddriver" className="main-body-item col" >
               <div>
                    <div class="card " id="main4" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/ultraviolet/40/000000/driver.png" className="main-icon" />
                        </div>
                        <div class="card-body">
                            <h6>Add Driver</h6>
                        </div>
                    </div>
                </div>

               </a>
            </div>
            <div className="main-body2 row">
                <a href="" className="main-body-item-2 col" >
                <div>
                    <div class="card second-row" id="main5" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/nolan/64/invoice.png" className="main-icon" />
                        </div>

                        <div class="card-body ">
                            <h6>Invoices</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="" className="main-body-item-2 col">
                <div>
                    <div class="card second-row" id="main6" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/fluent-systems-regular/48/000000/cheque.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>Payment</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="" className="main-body-item-2 col" >
                <div>
                    <div class="card second-row" id="main7" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/fluent/48/000000/car-insurance-card.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>Demurrage</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="" className="main-body-item-2 col">
                <div >
                    <div class="card second-row" id="main8" >
                        <div className="img-div">
                            <img src="https://img.icons8.com/material-two-tone/50/000000/customs-clearance.png" className="main-icon" />
                        </div>
                        <div class="card-body ">
                            <h6>Clearance</h6>
                        </div>
                    </div>
                </div>
                </a>
                
               
                
           



            </div>
            <div>
                <div>
                    <hr className="line" />
                    <div className="row charts">
                        <div className="col">
                        <div id="piechart"></div>

                        </div>
                        <div className="col">
                        <div id="barchart"></div>   

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main