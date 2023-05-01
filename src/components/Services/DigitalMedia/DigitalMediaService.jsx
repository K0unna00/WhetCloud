import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Service.scss"

export default function DigitalMediaService() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        
      }, [])
  return (
    <div className='service-container'>
        <div className="title col-12" data-aos="fade-right">DIGITAL MEDIA MARKETING SERVICE</div>
        <div className="text col-12 " data-aos="fade-right">
            The digital world has come as a blessing for the entire world. The things that required the effort of mankind to move around to do something are vanishing. Now with a few clicks, you can do whatever you want to. 
            The internet has provided ease to humanity. Now, if you are feeling lazy to cook something to blow up your appetite, you can order food online and it will be delivered to your door fresh. If you have to go shopping but aren’t in the mood to wander in the outlets, you can go to any website, select your favorite dresses, and you will find it at your doorstep soon. 
            It has become possible because of the internet and the creative minds of marketing agents. They utilize the platform of digital media to enhance their sales and reach out to different customers around the globe. But it is not as easy as it seems. You need professionals who excel in this field and know what to post, where to post, and when to post. WhetCloud is the leading digital media marketing services provider who has abundant experience and expertise in the related field.
            WhetCloud consists of professionals who have command over the digital world. They are aware of all the tips and tricks related to enhancing customer engagement and reach that directly results in the hike of your product or service. Digital Marketing has provided the path for the elevating the businesses. People are not available physically but could be found online. So if you desire to watch your business reaching the new heights, the only way is to get good digital media marketing services. Our team of proficient professionals has made up the business of many companies with astounding and effective digital marketing. Our services are of top-notch quality. Here are a few services that we provide to our customers in our digital media marketing services package.
        </div>
        <div className="serviceCards consulting" data-aos="fade-up">
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Web Design and Development
                </div>
                <div className="desc">
                    The first and foremost step to enter the world of digital media is the creation of a website. The website paves the way for the businesses to have an amazing reach. 
                    Physical stores can only cater to a few customers, but if you are set to go online, you will find millions of people who are wandering on the internet. They are searching for the products they can get without getting out of their comfortable sofa sets. To achieve it, professionals at WhetCloud have all the required qualifications to make a website for you that can be the game-changer. We have set our standards in the market with excellent user experience. Our team has done wonders and has fulfilled the client’s satisfaction. 
                </div>
            </div>
            <div className="serviceCard col-md-6 col-sm-12">
                <div className="title">
                    Social Media Marketing
                </div>
                <div className="desc">
                    Our world is changing. The social media has influenced the entire population. People have moved to social relations than physical ones. Facebook, Instagram, Twitter, YouTube, etc are some of the famous social sites that have billions of users. There are many social media influencers having millions of followers. It can help you to market your product. But it demands certain expertise that our team already has command on. Putting up the advertisement in the right place for the targeted customers is an art and our experts are the artists. The magical expertise of our social media professionals enables them to showcase the tricks and tips to put you in the spotlight. You always remain engaged to your audience through social media marketing.
                </div>
            </div>
            <div className="serviceCard col-12">
                <div className="title">
                    Search Engine Optimization
                </div>
                <div className="desc">
                    There are millions of websites on the internet and many of them would be having the same products and services like yours? What will make you appear on top of them? Search engine optimization (SEO) has some deep techniques and tips related to it that put you on the starting pages of the search engine. Our skilled experts have command over the algorithms the search engines use to sort out the websites and put them on the top. Our team with their skills and website codes and structures makes your website display on the beginning page and top searches. It is important because people don’t have time to go through each website, they simply search, open the top websites, buy, and leave
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                Email Marketing
                </div>
                <div className="desc">
                Email marketing is one of the cheapest methods of digital media marketing. Once you get the email of your customer, you may stay connected to them forever. We collect the data you have from your customers and generate emails related to the products you have. Automatic emails are also generated that is sent to your customers if you have any new launch or discount offers. People usually check their emails as they are their official method of connecting. 
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                Content Marketing
                </div>
                <div className="desc">
                People are hungry for content. They want new things on their computer screens. To pull the attention of the people, we come up with creative and interesting content related to your products or services. We have innovative and creative people at our end that have magic in their fingers and produce fantastic content that definitely will attract the people towards it. Our exciting team of content writers has expertise in every niche and follows all the methods related to SEO practices.
                </div>
            </div>
            <div className="serviceCard col-md-4 col-sm-12">
                <div className="title">
                Video Marketing
                </div>
                <div className="desc">
                Video marketing is a vibrant digital media marketing service that has the potential to pull a huge amount of crowd towards it. Have you heard about a video going viral? Yes! Our experts create amazing content and fill it up with eye-catching graphics and animations to make sure the message is delivered to the people properly. We make sure to use such platforms to upload your video where you can catch maximum eyes. We make sure that the video is free from any glitches or errors.  
                </div>
            </div>
            <div className="serviceCard col-12">
                <div className="title">
                Pay Per Click
                </div>
                <div className="desc">
                Pay per click requires some investment to pull traffic towards yourself. As the competition in marketing is increasing by leaps and bounds, PPC helps you to generate traffic at a quicker speed than other methods. Our experts keep an eye over the campaigns and note down all the investments been made. The data help them to enhance the efficiency of the plan.
                </div>
            </div>
        </div>
        <div className="text col-12 " data-aos="fade-down">
        WhetCloud, with its highly experienced professionals, is capable of handling any sort of digital media challenges. We have paramount expertise in creating the state of the art videos that could be used for advertisements on different platforms. The videos are the display of real artistry in the field of videography. Our goal is to take your business to the heights of the sky from where you can achieve success and have command over the entire market shares. Our experts have a vast knowledge of utilizing the correct social media platforms for promotions. They have the talent of hitting the bullseye to attract more and more people towards your business. Either you demand a TV commercial or advertisement on a Facebook page, we have got it covered for you.
        </div>
    </div>
  )
}
