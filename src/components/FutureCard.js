import React from 'react'
import '../App.css';
import mask18 from "../images/fi_4338540.png"
import mask19 from "../images/fi_2438078.png"
import mask20 from "../images/fi_1628475.png"
import mask21 from "../images/fi_1629101.png"
import mask22 from "../images/fi_3114553.png"
import mask23 from "../images/fi_64673.png"
export const FutureCard = () => {
  return (
    <>
          <div className='future-card'>
        <div className='unveiling-head'>
          <h6 style={{ textAlign: "center" }}>Feature Highlights</h6>
          <h2 style={{ textAlign: "center" }}>Unveiling the Heart of Our Platform</h2>
          <p style={{ textAlign: "center" }}>Unlock the Door to Love: Register Now for a Journey of<br /> Connections and Compatibility.</p>
        </div>
        <div className='futurecard'>
          <div className='futurecard-rowone'>
            <div className='futurecard-one'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask18} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Precision Matchmaking at Your Fingertips</h4>
                <p>Experience matchmaking like never before. Our platform employs sophisticated algorithms and detailed criteria to ensure you connect with individuals who share your values, interests, and aspirations. Take the first step towards a meaningful relationship with our precision matchmaking features.</p>
              </div>
            </div>
            <div className='futurecard-two'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask19} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Verified Profiles for Trusted Connections</h4>
                <p>Your safety is our priority. Every profile on our platform undergoes a rigorous verification process, providing you with the assurance that you are connecting with genuine, like-minded individuals. Build meaningful connections with confidence through our verified profiles.</p>
              </div>
            </div>
            <div className='futurecard-three'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask20} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Tailored Search, Tailored Results</h4>
                <p>Customize your search for love with our comprehensive filter options. Whether it's age, location, or interests, our tailored search feature allows you to fine-tune your preferences, ensuring that every match aligns with your unique criteria.</p>
              </div>
            </div>
          </div>
          <div className='futurecard-rowtwo'>
            <div className='futurecard-one'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask21} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Success Stories That Inspire</h4>
                <p>Join the ranks of those who found love on our platform. Explore real-life success stories and testimonials from couples who embarked on their journey with us. Let their stories inspire and reassure you that your perfect match may be just a click away.</p>
              </div>
            </div>
            <div className='futurecard-one'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask22} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Your Privacy, Your Control</h4>
                <p>Take charge of your online journey with our robust privacy controls. Manage who sees your profile and choose the level of information you share. Your privacy is paramount, and we give you the tools to navigate your matrimony search on your terms.</p>
              </div>
            </div>
            <div className='futurecard-one'>
              <div className='future-imgone'>
                <img style={{ width: "auto", margin: "15px " }} src={mask23} alt='#'></img>
              </div>
              <div className='future-contentone'>
                <h4>Stay Connected with Seamless Messaging</h4>
                <p>Communication is key, and we've made it easier than ever. Our intuitive messaging platform lets you connect effortlessly with potential matches. From icebreakers to heartfelt conversations, foster connections with ease and grace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
