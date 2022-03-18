import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function ViewContainerDetails() {
    const transitingID = localStorage.getItem('transitingIdInLocalStorage');
    return (
        <div className="dashboard">
            <Header />
            <div className="contain form-contain">
                <div className="col-2 left-menu"><Sidebar /></div>
                <div className="col-10 right-menu user-form">
                    <div>
                        <button type="button" className="btn-trackingID tracking-btn">Add Agent</button>
                    </div>
                    <br></br>
                    <div className="details">
                     <div className="left-side-details">
                         <div className="row">
                         <div className="col "><h5>Transiting ID : {transitingID}</h5></div>
                         <div className="col">Entry Date : 23-05-2020</div>
                     
                         </div>
                      
                        
                         
                     </div>
                     <div className="right-side-details"  >
    
                 
                     
                     <div className="row">
                             <div className="col container-driver">
                                 <div>Container ID</div>
                                 <div>12345676</div>
                               <hr></hr>
                                 <div>Container Number</div>
                                 <div>12345676</div>
                                
                                 <hr></hr>
                                 <div>Container Size</div>
                                 <div>12345676</div>
                             </div>
                             <div className="col container-escort">
                                 <div>Seal Number</div>
                                 <div>12345676</div>
                                <hr></hr>
                                 <div>Container Status</div>
                                 <div><button type="button" class=" btn btn-success btn-sm">Approved</button></div>
                                 <hr></hr>
                                 <div>Container Category</div>
                                 <div>Hazadous</div>
                             </div>
                
                         </div>
                         <div className="row">
                             <div className="col container-driver">
                                 <div>Container ID</div>
                                 <div>12345676</div>
                             <hr></hr>
                                 <div>Container Number</div>
                                 <div>12345676</div>
                                 <hr></hr>
                                 <div>Container Size</div>
                                 <div>12345676</div>
                                
                             </div>
                             <div className="col container-escort">
                                 <div>Seal Number</div>
                                 <div>12345676</div>
                                <hr></hr>
                                 <div>Container Status</div>
                                 <div><button type="button" class=" btn btn-success btn-sm">Approved</button></div>
                                 <hr></hr>
                                 <div>Container Category</div>
                                 <div>Hazadous</div>
                             </div>
                
                         </div>
                     </div>
                 </div>
               
             
                
                    
                </div>
            </div>
        </div>

    );
}

export default ViewContainerDetails