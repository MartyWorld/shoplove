import React from 'react';
 import world3 from "../../assets/image/myfishstop/png/world3.png";

const SectionDetail = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div
                            className="mt-8 mt-lg-0"
                            data-aos="fade-right"
                            data-aos-delay={500}
                        >
                            <div className="d-flex justify-content-center">
                                <div
                                    className="text-center mb-lg-5"
                                    data-aos="zoom-in"
                                    data-aos-duration={500}
                                >
                                    <h2 className="font-size-10 letter-spacing-n83 mb-6">
                                        <span style={{ color: '#F5752A' }}>Made In</span> <span style={{ color: '#12B8BA' }}>South LA</span>
                                    </h2>
                                    <p className="font-size-7 mb-0 text-black">
                                        Since 2014 MISLA- Made In South LA, has provided technology and financial literacy bootcamps on an
                                        ongoing basis to both youth and adults alike. Positioning our MISLA participants to be game changers in the
                                        tech industry is our overarching intention and we have been able to pair several of our past participants with
                                        roles within tech, evidence of the employable curriculum style in which we utilize.
                                    </p>
                                        <div className="">
 <a style={{ color: '#000' }} href="https://misla.org/" className="d-flex align-items-center justify-content-center mt-3" target="_blank">
                              
                                    <img src={world3} className="mr-3" style={{ width: '14px', height: '14px' }} />
                                     <p className="font-size-6 mb-0 font-weight-bold">
                                        Visit MISLA
                                    </p>
                            
                                </a>
                            </div>
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
