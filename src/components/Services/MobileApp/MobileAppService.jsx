import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Service.scss"

export default function MobileAppService() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className='service-container'>
        <div className="title col-12" data-aos="fade-right">MOBILE APP DEVELOPMENT SERVICE</div>
        <div className="text col-12 " data-aos="fade-right">
            Our world has seen computers as big as a double story building having an enormous structure with very low functionality. As technology intervened, the size kept on decreasing and today it's as small as a human’s palm. Mobile phones have brought a technological revolution in the world. It has been so nifty that you could find it in each hand. 
            Mobile phones are nothing without their applications. Today, you can find applications related to every aspect of life. There are apps for entertainment, health, news, education, weather, social media, and whatnot. Through these apps, you can do your routine work without moving out from your comfortable sofa set. You can text anyone at any time, order stuff, get updates from around the globe, and entertain yourself. What made it possible? It is all because of the untiring efforts of the app developers. 
            WhetCloud is one of the leading companies that provide mobile app development services. We have a team of skilled mobile app developers who have vast experience and expertise in this field. The magical combination of the brain and creativity of our team reflects in the apps we develop. The apps we create are fully functional without any glitches occurring to create troubles for the users. 
        </div>
        <div className="serviceCards consulting" data-aos="fade-up">
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    IOS App Development
                </div>
                <div className="desc">
                    Having master developers of iOS apps, our team is the leading creator of apps that are fully functional on iOS. We create futuristic and fully functional apps that will make your business or any other work stand out differently from others. Whether you intend to increase your engagements with customers, elevate your brand’s social search, escalate your business reach, and manage all the stuff with proficiency, we build state-of-the-art apps for you to flourish. The user experience will certainly be satisfying and unforgettable. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                   Android App Development
                </div>
                <div className="desc">
                     Android applications are now really common. Many freelancers are developing it too, but they certainly lack charisma. Android applications have the potential of being the best but it requires efforts of skilled personnel. Those skills are embedded in our team of professionals. We are fully qualified of developing mobile applications to meet your business demands and needs. Our team always stays updated and keeps an eye on the new technologies that keep coming in. 
                </div>
            </div>
            <div className="serviceCard col-12">
                <div className="title">
                    Cross-Platform App Development
                </div>
                <div className="desc">
                    If you want to enjoy the perks of multi-platform based applications, our designers are ready to serve you. Cross-platform app development has additional benefits. It is one of the latest technologies for mobile app development that provides a complete package for users. Our development team specializes in PhoneGap, Webix, and other popular technologies and frameworks. It helps to increase the reach and engagement without compromising the quality of the application. 
                </div>
            </div>
        </div>

        <div className="serviceCards consulting" data-aos="fade-up">

            <div className="title col-12" data-aos="fade-up">Our Captivating Methodology</div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                    Scope and Vision
                </div>
                <div className="desc">
                   Communication is the key to success. We invite our customers wholeheartedly and discuss with them about their objectives and vision. We provide them guidance related to what will be most suitable for them and their business. It’s our prime duty to understand the vision of our customers and assist them in achieving it. We make them understand what technology to adopt and lay a network of possibilities in front of them to select from.
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                  Plan and Analysis
                </div>
                <div className="desc">
                After getting a green signal from our customers, we start brainstorming all the possibilities and come up with a plan that has the greatest potential to get successful. We analyze all the documents and prepare a plan to assign tasks. We discuss the expenses and budgets along with the costs that could be saved from various tactics. 
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                    Design and Development
                </div>
                <div className="desc">
                    Our designers are ready to do magic to develop an astonishing application. Firstly, we decide the software architecture and prototypes are made. We make sure to design a flawless application with aesthetic designs. Our priority is to make it usable for users without any complexity. Our experts make it fully functional. Then our designers add visual elements to give the app a captivating look. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Quality Assurance and Tests
                </div>
                <div className="desc">
                    Our prime aim is to satisfy our customers and provide them a flawless end product. To make sure of it, we carry out quality assurance tests with modern tools and techniques at each step. As it is extremely important because if the test is done at the last stage, all the hard work will go in vain and designers would have to start from that point. We have QA experts that collaborate with the developers to produce a refined final product.
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Deployment
                </div>
                <div className="desc">
                    Once the application is ready to go live, we hand it over to our customer so that he is satisfied and then put it on the stores so that it can reach out to the targeted audience. We make sure that the app performs brilliantly without any glitches.
                </div>
            </div>

            <div className="serviceCard col-12">
                <div className="title">
                    Maintenance and Technical Support
                </div>
                <div className="desc">
                    We don’t leave our customers abruptly. We provide them all the technical support to them related to the application and new developments. We keep maintaining the application so that users don’t face any issues in it. We run random checks and look out for any glitches that may occur with time. 
                </div>
            </div>
        </div>
        <div className="text col-12 " data-aos="fade-up">
            WhetCloud offers consummate mobile app development services to ensure that the customers don’t face any difficulties on the virtual platforms. Our professionals have strong command over Android, IOS, HTML 5, Hybrid App development. The exposure on these systems can take your business levels to the extreme heights where billions of people dwell. Our experts have mastered the art of mobile app development with all requisites of the field. How to put up content? What should be displayed on the screen? How fast the app is and what features does it hold are some of the common questions our customers worry about. Our applications contain the answer to all these questions and solutions to other problems
        </div>
    </div>
  )
}
