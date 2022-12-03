import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import go5 from "./asset/go5.jfif"

const Viewproduct = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid mt-5 pt-1 mb-4 p-0 m-0">
                <div className="">
                    <section className="single-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={go5} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="title-box">
                                        <h2 className='text-white'>Details</h2>
                                    </div>
                                    <h2>Men Dress</h2>
                                    <p>Product Code: IRSC198704</p>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="price">USD $70.00</p>
                                    <p><b>Availability:</b> In Stock</p>
                                    <p><b>Condition:</b> New</p>
                                    <p><b>Brand:</b> Nike Company</p>
                                    <button type="button" className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Viewproduct