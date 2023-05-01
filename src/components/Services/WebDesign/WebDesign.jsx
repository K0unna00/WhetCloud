import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Service.scss"

export default function WebDesignService() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className='service-container'>
        <div className="title col-12" data-aos="fade-right">WEB DESIGN SERVICES</div>
        <div className="text col-12 " data-aos="fade-right">
            The exhilarating invention that brought technological revolution is none other than the internet. The internet transmuted the world into a global village. The distances have been shortened to such a limit that one can view a person living at the other end of the world with just a simple video call. The businesses that shifted towards E-commerce have made their fortunes. They have made bundles of money. It all happened because of the internet. 
            Today, on the internet, there are millions of websites ready to serve their visitors. They belong to businesses, eateries, entertainment, news, health, and many diverse services. Now you don’t have to wait in the long queues to get your turn. Instead, you can visit the store or any outlet online and do whatever you want to. It is the result of advancement in the field of web design services. New technologies are popping out that are making it easier and more functional for the users to have a brilliant experience. WhetCloud is one of those agencies that are well-known for their services in web designing. 
            The professionals at WhetCloud are highly experienced and have complete skillsets of web designing. They have a sound knowledge of all the computer languages and software that assist in designing the finest of websites for their customers. They have command over the techniques and tricks that make their website stand out differently among the others. Our experts make sure to deliver the best quality work that fulfills the satisfaction of the customers. Our following features make our web design services exceptional.
        </div>
        <div className="serviceCards consulting" data-aos="fade-up">
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                Designing Expertise
                </div>
                <div className="desc">
                hetCloud has professionals that have immense expertise in web designing. We provide top-notch quality services and make sure to design such a website that is user friendly, as the main aim is to pull the crowd towards the website. Our experts listen to your desires and plans. They guide you with the most suitable package for your plans. Our developers start the work from scratch and let the client know about the progress and get it verified if it's fulfilling the requirements. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                Top-Notch Quality
                </div>
                <div className="desc">
                The quality of the website matters the most. You can spend a handsome amount on the development of a website but if it doesn’t have a good quality, your investment is wasted. We care about our customers. Our professionals never compromise on the quantity no matter what. Many businesses excel due to their websites as they don’t create problems for the users. If your website is similar to theirs and has wonderful content on it, there is nothing that can stop you from growing. We make sure that you achieve such milestones by keeping the quality of your website perfect. A website that doesn’t take much time to load has things at its appropriate position where customers don’t have to dwell much to search for their desired items are the ones that succeed in the game.

                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                Proper Maintenance
                </div>
                <div className="desc">
                    Maintenance is an important part of website development. It’s not a one time show. It needs care like every other entity. Glitches might appear that can slow down the performance of the website. Broken links may be produced that take the users to a dead end resulting in wastage of time. There can be security breaches that can be a really serious threat. We make sure to save you from all these miseries. We look after the website and perform tasks that are required. We also update the website to make sure you stay above your every other competitor. 

                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                Lavish Creativity
                </div>
                <div className="desc">
                    We all cherish new things. Your website can stand out differently from others if it has something unique. Our designers are innovators and creativity runs through their veins. The majestic combination of this creativity with the skills makes our professionals best among the rest. This combination certainly pops out such results where the websites look amazing. We try to implement new technology and styles that pull the crowd. We try to find the ideas that will suit your plans and help you grow. Our professionals have amazing ideas to turn ordinary things into astonishing ones. We keep on updating ourselves to provide you the finest services. 

                </div>
            </div>
            <div className="serviceCard col-12">
                <div className="title">
                Experience
                </div>
                <div className="desc">
                    We have done numerous successful projects with several clients. We have cultivated much experience which is increasing day by day. We have learned the art of understanding what our clients want. We guide them and choose the best plan for them that is best in their interest. Sometimes, things look better but they are not, that’s where our experts come in and bless you with the beneficial bits of advice. With high expertise and experience, our professionals are the best in town for developing your website. We take hints from our past projects that have reached the top and implement it on our other projects to make sure it’s successful. We have command over different languages and platforms where the website is built. You can select the platform by your wish. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Low Cost
                </div>
                <div className="desc">
                Nobody can deny the importance of money. The more features you want on your website, the more you have to invest. But, WhetCloud cares about their clients. Our costs are very much lower than the other firms providing similar services. Customer satisfaction is our top priority and we never compromise the quality due to costs ad budgets. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Specialized Marketing Skills
                </div>
                <div className="desc">
                Business is all about making money. The only aim of making a website for business endeavors is to earn money. Putting your website online paves your way to reach millions of customers that will directly impact your sales. We make such friendly websites that always stay on the top pages of the search engines. We make it visible to millions of people by performing different SEO techniques and marketing tips. We upload such content that pulls the attention and generates traffic on your website.
                </div>
            </div>
        </div>

        <div className="text col-12 " data-aos="fade-up">
            WhetCloud provides refined web design services to match the needs and desires of your business. Our web services are a magical mixture of smart programming, aesthetic display, innovative thinking, and advanced ideas. The skillsets of professionals vary from Java, PHP, WordPress, .NET, and much more. They have excellent command over the languages and programming software. They have the talent of converting the idea into reality exactly. Either you want to have an E-commerce website to boost your business or a website for your organization, our professionals with their diverse adroitness are ready to serve you. We develop user-friendly websites that are fully functioning to ensure customer satisfaction on both ends.
        </div>
    </div>
  )
}
