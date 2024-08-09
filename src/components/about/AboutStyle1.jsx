import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/1.jpg"
import signatureThumb from "@/assets/img/signature.png"
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Feel Valued & Rewarded</div>
                            <h2 className="title mb-25">Finance Consulting for Challenging Times</h2>
                            <p>
                                We work to understand your issues and are driven to ask better questions in the pursuit of making work. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keep.
                            </p>
                            <div className="owner-info">
                                <div className="left-info">
                                    <h4>Richard Garrett</h4>
                                    <span>CEO & Founder</span>
                                </div>
                                <div className="right-info">
                                    <Image src={signatureThumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                                <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;