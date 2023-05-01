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
        <div className="text col-12" data-aos="fade-right">
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
            <div className="title col-12 " data-aos="fade-right">Cloud Computing Services</div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Data Storage and Management Services
                    </div>
                    <div className="desc">
                        Cloud computing is a deep abyss where an unlimited amount of data could be stored. There are many hosts available that are ready to store your data. Organizations have to keep records of their employees, transactions, cash flows, and different data and information. The amount of data is huge and it will be really inappropriate to have a huge storage unit separately.
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Application Development Services
                    </div>
                    <div className="desc">
                        Application development on cloud or converting an app to cloud systems is possible and certainly beneficial for the firms. The services include the customization of the applications as per the standards of cloud computing and proper functionality. 
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Migration Services
                    </div>
                    <div className="desc">
                        Migration services are related to transmuting apps and webs made on different platforms to the cloud systems. It enhances the capabilities as a cloud system provides way better performance than other platforms. All the day to day activities are noticed so that any glitches can be overcome due to the migration of apps and websites.
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Security
                    </div>
                    <div className="desc">
                        There is a top-notch quality security system provided in cloud computing. All the data is safe and secure. Due to excessive security and firewalls, the leaking of data is impossible. The breach from any outsource is nullified. It also depends upon the service providers and their expertise in the field of security.
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Assurance Services
                    </div>
                    <div className="desc">
                        Cloud computing service providers assure the top performance of the system. They manage cloud computing risks. They perform complete business analysis and make sure that the services boost up the business. The complete implementation of the cloud system properly is made certain.  
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Back-Up and Restoration Services
                    </div>
                    <div className="desc">
                        The data and information are precious for any organization. It contains the information related to the employees as well as the customers and their likes. It plays a vital role in the progress of the business. If the data is lost, the organization will have to bear a huge loss. Cloud computing provides data back up and restoration so that the organizations don’t have to go through trauma. 
                    </div>
                </div>
                <div className="serviceCard col-12">
                    <div className="title">
                        Strategy and Consulting Services
                    </div>
                    <div className="desc">
                        Turning to cloud computing from conventional methods is not an easy method. It requires specialists and experts to develop a strategy for the firms to avail the maximum benefits of the cloud. They deploy such strategies for you that will maximize your business and fulfill your needs. There are consultants available to aid you if you get stuck somewhere. They are available to help you understand how the system works. They will assist you that how could you enhance the performance of your system using cloud techniques. Cost reduction is also possible if you avail only the services your business or firm requires.
                    </div>
                </div>
        </div>
    </div>
  )
}
