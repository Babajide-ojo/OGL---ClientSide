import '../App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'


function AddAdmin() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [video, setVideo] = useState('')
  const [password, setPassword] = useState('')

  let url = 'http://localhost:8000/'



  const handleSubmit = (e) => {
    e.preventDefault()

    const admin = new FormData()


    admin.append("first_name",firstName)
    admin.append("last_name",lastName)
    admin.append("email",email)
    admin.append("image",video)
    admin.append("phone_number", phoneNumber)
    admin.append("password",password)
    console.log("admin",admin)

    axios
      .post(`${url}admin/create`, admin)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))

      e.target.reset();
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="contain form-contain">
        <div className="col-2 left-menu">
          <Sidebar />
        </div>
        <div className="col-10 right-menu user-form">
          <div className="add-Agent">
            <form onSubmit={handleSubmit} encType="multipart/form-data" method='POST'>
              <div className="form-title">
                <h3>Add Employee</h3>
                <hr></hr>
              </div>
              <br></br>

              <div class="row mb-3">
                <label>First Name</label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    id="driverName"
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Last Name </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    id="address"
                    onChange={(e) => {
                      setLastName(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Phone Number </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    name="phone_number"
                    class="form-control"
                    id="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Email</label>
                <div class="col-sm-12">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="entryDate"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Photo</label>
                <div class="col-sm-12">
                  <input
                    type="file"
                    class="form-control"
                    name="file"
                    id="driverPhoto"
                    onChange={(e) => {
                      setVideo(e.target.files[0])
                    }}
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Password</label>
                <div class="col-sm-12">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    id="driverLicense"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>
              </div>
              <button type="submit" class="btn tracking-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAdmin
