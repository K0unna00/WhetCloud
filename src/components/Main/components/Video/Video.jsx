import React,{useEffect}from 'react'
import './Video.scss'
import video from './Overview.mp4'
import AOS from 'aos';

export default function Video() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className="video col-12" data-aos="fade-left">
            <div className="container">
                <div className="title col-12">
                    Overview of Our Company
                </div>
                <video controls>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
  )
}
