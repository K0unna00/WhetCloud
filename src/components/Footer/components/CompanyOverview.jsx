import React from 'react'
import "./footerComponent.scss"
import { Link } from 'react-router-dom'


export default function CompanyOverview() {
    return (
        <div className='container'>
            <div className="footerCompText">
                <div className="sub-text">
                    We are a process driven technology company with several years of experience in application development, we at Whetcloud strive to exceed customer expectations by developing innovative and cost effective enterprise solutions for our customers. <br />
                </div>
                <div className="sub-text">
                    With expertise in process automation we deliver solutions that not only day to day operations but also help increase profitability, we are a proud Texan based firm specializing in Consulting, digital design, digital marketing, Web application design and development as well as develop customized software solutions as per as the customer needs. <br />
                </div>
                <div className="sub-text">
                    Our development philosophy focuses to provide state of the art solutions that support our clients near and long-term business needs. <br />
                </div>
                <Link to="/contact" className="sub-button">
                    Contact Us
                </Link>
            </div>

        </div>
    )
}
