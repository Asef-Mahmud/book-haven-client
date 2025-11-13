import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const About = () => {

        useEffect(()=>{
        Aos.init({
            duration: 900,
        })
    },[])

    return (
        <div className="font bg-accent-content py-10 lg:py-20">
            <div data-aos="fade-up" data-aos-easing="ease-in-out" className="max-w-11/12 mx-auto px-15 lg:px-30 text-primary border-l-accent border-l-4">
                <div data-aos="fade-right">
                    <h1 data-aos="fade-up" className="text-4xl text-center font-bold text-accent pt-10 my-3">
                        About Book Haven
                    </h1>
                    <p data-aos="fade-left" className="text-justify text-accent my-5 lg:my-10">Welcome to The Book Haven — your cozy corner of the digital world where stories come alive. Built for readers, dreamers, and collectors alike, The Book Haven is more than just a library — it's a sanctuary for every page you've ever loved. Here, you can explore timeless tales, add your own favorite books, and curate a collection that reflects your unique literary journey. In a world that moves fast, The Book Haven invites you to slow down, sip your coffee, and lose yourself between the lines — because every great story deserves a home.</p>
                </div>

                <hr data-aos="fade-up-right" className="mt-5 lg:mt-10 hidden md:flex border text-accent"/>
                <hr data-aos="fade-up-left" className="border hidden md:flex text-accent"/>
                
                <div data-aos="fade-right" className="py-5 lg:py-10">
                    <h1 data-aos="fade-up" className="text-2xl text-right font-bold text-accent pt-10 lg:pt-20 my-3">Our Mission</h1>
                    <p data-aos="fade-right" className="text-right text-accent my-5 lg:my-10">
                        To make reading more accessible, enjoyable, and personal.
                        The Book Haven is not just an app — it's a sanctuary for readers who believe that stories can shape the world. Whether you're exploring timeless classics or discovering indie gems, our mission is to bring your favorite tales closer than ever before.
                    </p>
                </div>

                <hr data-aos="fade-left" className="mt-5 hidden md:flex lg:mt-10 border text-accent"/>
                <hr data-aos="fade-right" className="border hidden md:flex text-accent"/>
                

                <div data-aos="fade-up" className="py-5 lg:py-10">
                    <h1 data-aos="fade-down" className="text-2xl text-left font-bold text-accent pt-10 lg:pt-20 my-3">
                        Our Vision
                    </h1>
                    <p data-aos="fade-up" className="text-justify text-accent my-5 lg:my-10">
                        We envision The Book Haven as more than a library — a growing community of readers connected by curiosity and imagination. In the future, we aim to introduce book discussions, reviews, and personalized recommendations to make reading a shared experience once again.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default About;