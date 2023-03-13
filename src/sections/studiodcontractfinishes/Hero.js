import React from "react";
import Link from "next/link";
import arrow from "../../assets/image/arrow.png";
import imgM from "../../assets/image/studiodcontractfinishes/png/hero-image.png";
import BuyButton from '../../sections/common/BuyButton'

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-md-6">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={imgM} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-md-6">
            <div
              className="mt-5"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                <span style={{ color: '#e16b2b' }}>$200 Discount on</span> <span style={{ color: '#ef1d24' }}>Color Consultation.</span>
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
                We’re thrilled to announce that our in-home colour
                consultancy service has resumed for customers
                in the Greater Los Angeles area.<br />
                Inquire now to get your next project off to a great start
                with the help of our colour experts at a $200 discount
                for a limited time.
              </p>
              <div className="mt-10">
                <div className="row align-items-center">

                  <div className="col-lg-5">

                    <BuyButton img={imgM} title='Studio D Color Consultation' businessTitle='Studio D!' price='112' productId='prod_Kdy1tQ82a0V2fR' className="btn btn-dark-green btn-3 rounded-5 text-white" target="_blank" style={{ background: '#a52062', borderColor: '#a52062' }}>
                      Book Your Consultation
                    </BuyButton>

                  </div>
                  <div className="col-lg-7">
                    <p className="font-size-5 mb-3 "> Looking for more savings?</p>
                    <p className="font-size-5 mb-0">Scroll down to discover the SLASHcard</p>
                    <p className="font-size-5 mb-0">50% discount card, for a limited time.</p>
                    <div className="arrow-down">
                      <img src={arrow} alt="arrow" />
                    </div>
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
};

export default Hero;
