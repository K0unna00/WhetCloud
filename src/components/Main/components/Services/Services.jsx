import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Services.scss'
import AOS from 'aos';


export default function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className="services w-100">
            <div className="container col-12 flex-wrap">
                <div className="service-cards col-9">
                    <div className="serviceCard">
                        <i className="fa-solid fa-cloud"></i>
                        <div className="title">
                            Cloud Service
                        </div>
                    </div>
                    <div className="serviceCard">
                        <i className="fa-solid fa-mobile"></i>
                        <div className="title">
                            Mobile App and Web 
                        </div>
                    </div>
                    <div className="serviceCard">
                        <i className="fa-solid fa-briefcase"></i>
                        <div className="title">
                            Consulting Service
                        </div>
                    </div>
                    <div className="serviceCard">
                        <i className="fa-brands fa-digital-ocean"></i>
                        <div className="title">
                            Digital Media Service
                        </div>
                    </div>
                </div>
                <div className="title col-12">What we do <br/> Our services blended with unique solutions</div>
                <div className="serviceCards" data-aos="fade-left">
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Web Development
                        </div>
                        <div className="text">
                            Our custom web development services are a sophisticated blend of intelligent programming, creative design & forward-thinking business acumen.
                        </div>
                    </div>
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Mobile App Development
                        </div>
                        <div className="text">
                            We create organic results that last. We make sure you get to the top and stay there.
                        </div>
                    </div>
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Mobile App Development
                        </div>
                        <div className="text">
                            From developing mobile apps to mobile solutions that empower your business we have the tech experts to get you going. Have an App Idea? contact us to get started.
                        </div>
                    </div>
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Machine Learning with Python
                        </div>
                        <div className="text">
                            Whetcloud offers a wide range of technology and Python services; a broad portfolio of middleware for collaboration, predictive analytics, software development and systems management; and the world’s most advanced technology and services.
                        </div>
                    </div>
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Consulting Expertize
                        </div>
                        <div className="text">
                            With over two decades of consulting experience in the IT & Telecom sector, our expertize has helped define telecom patents, develop integrated solutions and driven businesses to success.
                        </div>
                    </div>
                    <div className="serviceCardOut col-sm-12 col-md-3">
                        <div className="title">
                            Artificial Intelligence
                        </div>
                        <div className="text">
                            All the things which are software based will be done successfully by us. As we are software based IT Industry so we offer coding best solutions to our customers. We use Artificial Intelligence in various fields.
                        </div>
                    </div>
                </div>
                <div className="servicesButton col-12 text-center mt-5" data-aos="fade-up">
                    <Link className="serviceButtonA">More Services</Link>
                </div>
            </div>
            <div className="result" data-aos="fade-right">
                <div className="black-shadow col-12">

                </div>
                <div className="container">                
                    <div className="resultCards col-12 ">
                        <div className="resultCard res-1 col-md-6 col-sm-12">
                            <div className="content">
                                <div className="title">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="resultCard res-2 col-md-6 col-sm-12">
                            <div className="content">
                                <div className="title">

                                </div>
                            </div>
                        </div>
                        <div className="resultCard res-3 col-md-4 col-sm-12">
                            <div className="content">
                                <div className="title">

                                </div>
                            </div>
                        </div>
                        <div className="resultCard res-4 col-md-4 col-sm-12">
                            <div className="content">
                                <div className="title">

                                </div>
                            </div>
                        </div>
                        <div className="resultCard res-5 col-md-4 col-sm-12">
                            <div className="content">
                                <div className="title">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
