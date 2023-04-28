import React , {useEffect} from 'react'
import "../Service.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CloudService() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className='service-container'>
        <div className="title col-12" data-aos="fade-right">CLOUD SERVICE</div>
        <div className="text col-12" data-aos="fade-left">
        The internet has done wonders on this land. It has brought a technological revolution in this world that has engulfed everyone and everything. Almost everything has shifted to the digital world that has enhanced the engagements and facilities provided. It has transmuted the world into a global village where everyone, even been sitting at the opposite ends of the world are connected to each other. The internet has provided benefits to the businesses, firms, educational and health institutes, common public, and many more.
        Cloud computing is a miracle of the internet. Now with it, public or private organizations can avail mighty perks without dropping a single drop of sweat. It is beneficial for huge corporations as well as small scale organizations. They can maintain their records, store data, analyze software, innovate, and perform operations at a lightning speed. There are no limitations to its usage. The costs can be reduced, and one doesn’t have to worry about the hardware to run systems efficiently.  
        </div>
        <div className="serviceCards" data-aos="fade-up">
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                    Public Cloud
                </div>
                <div className="desc">
                    The public cloud refers to a clouding service that is for the public. The service provider manages all the hardware and software, and the users can avail the facilities through a web browser without worrying about the backend. 
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                    Private Cloud
                </div>
                <div className="desc">
                    Private cloud refers to a clouding service that is used by a single organization or firm. The system is installed at the firm’s data center or they seek services of a third-party host. The data and information are only available on the private network.
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                    Hybrid Cloud
                </div>
                <div className="desc">
                Hybrid cloud is a combination of Public and Private Clouds where the data and information could be shared between the public and private to enhance the functionality and flexibility. 
                </div>
            </div>
        </div>
    </div>
  )
}
