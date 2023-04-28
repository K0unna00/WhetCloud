import React from 'react'
import './Contact.scss'
import Iframe from 'react-iframe'

export default function Contact() {
    const iframe = `<iframe src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.501040162559!2d-96.7618205!3d33.1484707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3dee761479a5%3A0x6a9388f1eb619f5d!2s13391%20Torrington%20Dr%2C%20Frisco%2C%20TX%2075035%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1682704246634!5m2!1str!2saz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    

    return (
        <div className='container form-container flex-wrap'>
            <div className="getInTouch col-md-7 col-sm-12">
                <div className="title">Get In Touch</div>
                <form className='col-12 d-flex flex-wrap'>
                    <input className='col-md-5 col-sm-12' type="text" placeholder='Name' />
                    <input className='col-md-5 col-sm-12' type="text" placeholder='Email' />
                    <input className='col-12 col-sm-12' type="text" placeholder='Subject' />
                    <textarea placeholder='Message' id="" cols="30" className='col-12' rows="10">
                    </textarea>
                    <button>Send Message</button>
                </form>
            </div>
            <div className="contactUs col-md-5 col-sm-12">
                <div className="title">Contact Us</div>
                <Iframe src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.501040162559!2d-96.7618205!3d33.1484707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3dee761479a5%3A0x6a9388f1eb619f5d!2s13391%20Torrington%20Dr%2C%20Frisco%2C%20TX%2075035%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1682704246634!5m2!1str!2saz"
                    height="74%"
                    id=""
                    className="col-12"
                    display="block"
                    position="relative"
                    border="1px solid gray"/>
            </div>
        </div>
    )
}
