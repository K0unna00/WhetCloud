import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Service.scss"

export default function ConsultingService() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

    }, [])
    return (
        <div className='service-container'>
            <div className="title col-12" data-aos="fade-right">IT CONSULTING SERVICE</div>
            <div className="text col-12 " data-aos="fade-right">
                The world of information and technology is growing rapidly. Digitalization has become normal and everything is being transmuted into it. The world is now covered with unseen signals of different frequencies that are carrying zillions of bits of information with them without catching a glimpse of an eye. The automation processes are no more new to the world.
                The fast-paced world is waiting for none. The technological revolution is here and everyone is playing their role in it. The advancements in the IT field are exhilarating, leading to the solutions of many unanswered queries. WhetCloud is one of the leading IT consulting services providing agency that has a renowned reputation in the virtual world. We deliver tailored IT consultancy services and support to the organizations of every size.
                Implementation of extraordinary policies cultivated from the best of the minds at WhetCloud, having sound technical expertise can take any firm to the heights that have never been touched before. We meet the business goals by enhancing the technological objects of the firm. Our tactical IT consulting aid in digitalizing the operations and enhancing the portfolio by bringing in the automation processes.
                Our IT consulting services start from assessments to finding solutions and their implementation. It’s a complete journey of technological transmission that will transmute your organization that will harvest fruitful results.
            </div>
            <div className="serviceCards consulting" data-aos="fade-up">
                <div className='title col-12'>
                    IT ASSESSMENTS
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Technological Assessment
                    </div>
                    <div className="desc">
                        Technological assessment is designed to provide a complete overview of the current IT systems installed in the firms and how they are performing to achieve the aims. It analyzes the methods that are used to deliver the IT services throughout the firm. It will highlight the loose ends in the system and recommend the best solutions that are implemented in successful businesses.
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Financial Assessment
                    </div>
                    <div className="desc">
                        The financial assessment is designed to evaluate the IT expenses and budgets allocated to the IT side. It gives an in-depth knowledge of the expenditures and their results. We compare your expenses to the benchmark companies of a similar size and caliber and derive results to check whether the investment is going in the right direction or not. We assist you in allocating your budget to the places where it is needed the most. Better policies for spending capital are implemented so that the firm can achieve goals without suffering from financial troubles.
                    </div>
                </div>
                <div className="serviceCard col-md-4 col-sm-12">
                    <div className="title">
                        Business Assessment
                    </div>
                    <div className="desc">
                        Business assessment is designed to analyze the aims and goals of your firm. It helps in determining the role of IT in the enhancement of the business. It comes up with the proper plans and sharp strategies to give a boost to your business with the proper use of IT tools and systems. We understand your needs and align them with the new technologies to let you flourish.
                    </div>
                </div>
            </div>
            <div className="title col-12">IT RISK ANALYSIS </div>
            <div className="text col-12">
                Every technology comes up with its risks. It is common that the firms describe only the beneficial side of the IT strategies implementation but at WhetCloud, we ensure that the organizations have complete knowledge of any risk they could face due to the IT systems. The management of the IT system is not as easy as it sounds. A tad error is enough to bring wrath on the whole organization. Most of the firms are blind to the risks hovering over them. They lack the artistry of foreseeing the risk and with that, it makes it really hard to evaluate and eliminate the risk.
                <br />
                WhetCloud consulting services are not ordinary ones. We have professionals, who have advance knowledge related to their fields. They have wide experience and magical problem-solving skills. We provide consultancy in Project Management, Product Management, Software Development, Cloud, and Network Engineering. Our experts are ready to listen to your concerns and constructively guide you mentioning all the pros and cons of the ideas. We aim to see you grow and get better with time. To accomplish it, we engulf all the opportunities and risks that you may encounter. We provide adequate guidelines and solutions for you to grow.
            </div>
            <div className="serviceCards consulting" data-aos="fade-up">
                <div className="serviceCard col-12">
                    <div className="title">
                        IT Planning and Tactical Approach 
                    </div>
                    <div className="desc">
                        WhetCloud provides an IT planning and tactical approach to unburden you with a load of modern technology. Our experts open up the book of numerous plans and strategies in front of you to decide what to choose for the organization. Today, the business structures are completely dependent upon the IT systems. If there are glitches in the system or the system fails to perform on high grounds, it will directly result in the downfall of the business. The plans and tactics selected today will have definite effects on the future of the organization. Our professionals make sure to decide such approaches for you where there are no negative impacts on the business. We develop strategies from scratch as well as provide consultancy on the specified areas as well. Our IT plans are made to expand and optimize your business. We provide you a complete plan after analyzing your needs and implement our strategies for the greater good of the firm. 
                    </div>
                </div>
                <div className="serviceCard col-12">
                    <div className="title">
                        IT Recovery System 
                    </div>
                    <div className="desc">
                        Glitches and mishaps can happen anywhere. They are inevitable but steps can be taken to reduce the chances of their appearance. Today, data is considered more important than anything. After IT conquered the world, all the data and information have been shifted to it. All the records kept by the companies are in their digital world. If somehow, the system collapses, it will take the organization down with it. Our professionals are ready to have combat with these horrendous scenarios. We provide an adequate IT disaster recovery plan that makes the organization ready to face any disaster and get recover from it with limited resources without any harsh effects. We also give consultancy on the already existing plans and point out the places where developments could be made. We also provide our services on a business continuity plan for the organizations that want to continue their business after getting struck with any calamity; either it is a system failure or global depression. 
                    </div>
                </div>
            </div>

        </div>
    )
}
