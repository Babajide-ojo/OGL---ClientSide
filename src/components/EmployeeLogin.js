import '../App.css';
import logo from '../ogl-logo.jpg'


function EmployeeLogin() {
    return (
        <div className="dashboard log">
            <div class="container-fluid px-1 px-md-1 px-lg-1 px-xl-1 py-1 mx-auto login">
                <div class="card card0 border-0">
                    <div class="row d-flex">

                        <div class="col-lg-12">
                            <div class="card2  border-0 px-4 py-5">
                              
                               <div className="login-title"><h5>ONLY GOD IS WISE LOGIN PORTAL</h5></div>
                               <hr className="line"></hr>


                                <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Email Address</h6>
                                </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
                                <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                                <div class="row px-3 mb-4">
                                </div>
                                <div class="row mb-3 px-3 d-flex">
                                    <div className="col-lg-6 submit" ><button type="submit" class="btn btn-blue text-center">Login</button></div>
                                    <div className="col-lg-6 forgotPassword"><a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a></div>
                                
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EmployeeLogin