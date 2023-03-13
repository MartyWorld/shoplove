import React from 'react';
import checkoutImg from "../../assets/image/hotcool/png/checkout-icon-1.png";

const SectionDetail = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            className=" mt-lg-0"
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div
                                className="text-center mb-lg-5"
                                data-aos="zoom-in"
                                data-aos-duration={500}
                            >
                                <h2 className="font-size-10 letter-spacing-n83 mb-6">
                                    Hot & Cool Cafe & <span style={{ color: '#552C2C' }}>Crenshaw Coffee Co.</span>
                                </h2>
                                <p className="font-size-7 mb-0">
                                    Hot & Cool brings fresh food and unconditional love to Leimert Park community and beyond. Hot and Cool's roots started in coffee roasting and
                                    we are now excited to have created our very own Brand of Coffee.
                                    Check out our Crenshaw Coffee Co. blends & the Best Vegan Bar food in L.A.
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mr-xl-15">
                                <div className="mr-3">
                                    <img src={checkoutImg} alt="" style={{ width: '14px' }} />
                                </div>
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 font-weight-bold">
                                        <a style={{ color: '#000' }} href="https://hotandcoolcafe.com/" target="_blank">Hot + Cool Cafe</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
}

export default SectionDetail;