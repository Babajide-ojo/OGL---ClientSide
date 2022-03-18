// // import React, { useState } from "react";
// // import MultiSelect from "react-multi-select-component";
import Header from './Header';
 import Sidebar from './Sidebar';





// // function AddBillLadding() {
// //   const options = [
// //     { label: "LC 1234556", value: "LC 1234556" },
// //     { label: "Mango", value: "mango" },
// //     { label: "Watermelon", value: "watermelon" },
// //     { label: "Pear", value: "pear" },
// //     { label: "Apple", value: "apple" },
// //     { label: "Tangerine", value: "tangerine" },
// //     { label: "Pineapple", value: "pineapple" },
// //     { label: "Peach", value: "peach" },
// //   ];

// //   const [selected, setSelected] = useState([]);
// //   return (
// //     <div className="dashboard">
// //       <Header />
// //       <div className="contain form-contain">
// //         <div className="col-2 left-menu"><Sidebar /></div>
// //         <div className="col-10 right-menu user-form">
// //           <div className="add-Agent">
// //             <form>
// //               <div className="form-title">
// //                 <h3>Driver Registration</h3>
// //                 <hr></hr>
// //               </div>
// //               <br></br>

// //                 <label>Upload Bill of Laden</label>

// //                   <MultiSelect
// //                     options={options}
// //                     value={selected}
// //                     onChange={setSelected}
// //                     labelledBy="Select"

// //                   />


// //               <div class="row mb-3">
// //                 <label>Address </label>
// //                 <div class="col-sm-12">
// //                   <input type="text" class="form-control" name="escort" id="address" placeholder="Address" />
// //                 </div>
// //               </div>
// //               <div class="row mb-3">
// //                 <label>Phone Number </label>
// //                 <div class="col-sm-12">
// //                   <input type="text" name="mobile" class="form-control" id="phoneNumber" placeholder="Phone Number" />
// //                 </div>
// //               </div>
// //               <div class="row mb-3">
// //                 <label>Email</label>
// //                 <div class="col-sm-12">
// //                   <input type="email" class="form-control" name="email" id="entryDate" placeholder="Email" />
// //                 </div>
// //               </div>
// //               <div class="row mb-3">
// //                 <label>Photo</label>
// //                 <div class="col-sm-12">
// //                   <input type="file" class="form-control" name="photo" id="driverPhoto" placeholder="Upload photo" accept="image/png, image/jpg, image/jpeg" />
// //                 </div>
// //               </div>
// //               <div class="row mb-3">
// //                 <label>Upload Driver's License</label>
// //                 <div class="col-sm-12">
// //                   <input type="file" class="form-control" name="photo" id="driverLicense" placeholder="Upload photo" accept="image/png, image/jpg, image/jpeg" />
// //                 </div>
// //               </div>


// //               <button type="submit" class="btn tracking-btn">Submit</button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // }




// // export default AddBillLadding

import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const AddBillladding = () => {
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
        { label: "Watermelon 🍉", value: "watermelon" },
        { label: "Pear 🍐", value: "pear" },
        { label: "Apple 🍎", value: "apple" },
        { label: "Tangerine 🍊", value: "tangerine" },
        { label: "Pineapple 🍍", value: "pineapple" },
        { label: "Peach 🍑", value: "peach" },
      ];

    const [selected, setSelected] = useState([]);

    // return (
    //     <div>
    //         <h1>Select Fruits</h1>
    //         <pre>{JSON.stringify(selected)}</pre>
    //         <MultiSelect
    //             options={options}
    //             value={selected}
    //             onChange={setSelected}
    //             labelledBy="Select"
    //         />
    //     </div>
    // );
   return(
    <div className="dashboard">
    <Header />
    <div className="contain form-contain">
      <div className="col-2 left-menu"><Sidebar /></div>
      <div className="col-10 right-menu user-form">
        <div className="add-Agent">
          <form>
            <div className="form-title">
              <h3>Add Billing Information</h3>
              <hr></hr>
            </div>
            <br></br>

            <div class="row mb-3">
              <label>Select Container Numbers</label>
              <div class="col-sm-12">
              <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
         />
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
   )
};

export default AddBillladding;