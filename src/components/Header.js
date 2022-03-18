import logo from '../logo.svg'
import '../App.css';

function Header() {
    return (
        <div class="">
            <div class="header">
                <div class="row">
                    <div className="col-3 company-title"><img src={logo} className="logo" alt="image" /><h6 className="company-name">OGL ENTERPRISES</h6></div>

                    <div class="col-7">
                        {/* <input class="search-field" type="search" placeholder="search..." />  */}
                    </div>

                    <div class="col-2 end-div">
                        <div class="profile">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="data:image/png;base64,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" class="profile-image" alt="images" />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="profile-id">
                                    <li><a class="dropdown-item" href="#">My profile</a></li>
                                    <li><a class="dropdown-item" href="#">Change Password</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>


    );
}

export default Header;
