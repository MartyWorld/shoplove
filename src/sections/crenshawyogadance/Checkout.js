import React from "react";

import checkoutIcon from "../../assets/image/tossItUp/png/checkout-icon.png";
import world2 from "../../assets/image/myfishstop/png/world2.png";

const Hero = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="mt-0">
                                <p className="font-size-7 mb-0 text-black d-flex justify-content-center align-items-center">
                                    <a href="https://crenshawyogaanddance.com/" target="_blank" className="text-black"><img src={world2} width="20" className="mr-2"/> <span> Discover our additional Classes & Programs</span></a>
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
