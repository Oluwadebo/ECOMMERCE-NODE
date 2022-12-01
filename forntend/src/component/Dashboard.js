import React from 'react'

const Dashboard = () => {
    const openmenu = () => {

    }

    const closemenu = () => {

    }
    return (
        <>
            <div>
                <div className="top-nav-bar">
                    <div className="search-box">
                        <i className="fa fa-bars" id="menu-btn" onClick={openmenu}></i>
                        <i className="fa fa-times" id="close-btn" onClick={closemenu}></i>
                        {/* <img src="image/amarican_express.png" className="logo"> */}
                        <input type="text" className="form-control" />
                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                    </div>
                    <div className="menu-bar">
                        <ul>
                            <li><a href="#"><i className="fa fa-shopping-basket"></i>Cart</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard