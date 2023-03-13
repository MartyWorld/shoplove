import React from "react";

import checkoutIcon from "../../assets/image/tossItUp/png/checkout-icon.png";

const Hero = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            className="mt-8 mt-lg-0 mr-xl-13"
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="mt-0">
                                    <p className="font-size-6 mb-0 text-white font-weight-bold">
                                        Visit MyFishStop.com to Explore oue Catering + Menu Items. You buy it, We Fry It!
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
};

export default Hero;
