import React, { useEffect, useState } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/navbar";

const faqData = [
  {
    question: 'Is Pro Bono Zone™ a law firm?',
    answer: 'Pro Bono Zone™ is not a law firm, nor are we owned by any law firm. Our third-party status allows us to be independent in judgment and highly selective in our choice of attorneys.',
  },
  {
    question: 'Are these consultations really free?',
    answer: 'Yes, they are absolutely free. There is no catch, and nothing to sign up for.',
  },
  {
    question: 'Is this an online event?',
    answer: 'No. Pro Bono Zone™ events are conducted live and in person.',
  },
  {
    question: 'Am I required to attend a group presentation?',
    answer: 'No. These sessions are private, one-on-one consultations in which you will receive highly personalized advice from a local attorney.',
  },
  {
    question: 'How long will my session be?',
    answer: 'You have 30 minutes to talk with your assigned attorney. To be fair to all participants we do need to keep the appointments moving along. However, in practice, the caliber of attorneys we work with are very accommodating and flexible. So, for example, if you need 35 minutes to work through a thorny issue, you will be able to do so.',
  },
  {
    question: 'When should I arrive?',
    answer: 'We strongly recommend that you arrive a full 15 minutes ahead of your scheduled time. That will give you the opportunity to relax and gather your thoughts and prepare your questions. There is one other reason to come early: now and then the person ahead of you may only need 10-15 minutes to have all their questions answered — in which case you will be invited in ahead of schedule.',
  },
  {
    question: 'Can we retain an attorney at this event?',
    answer: 'Our mission is to encourage and empower people to explore their legal options. That is why we host at a neutral venue and at zero cost. That is our exclusive focus. However, now and then the situation mentioned above does occur; and yes, that is allowed within our system. Finding the RIGHT attorney, i.e. someone we can relate to and feel we can trust is a significant part of making progress legally. So if you connect well, and the timing is right for you, we will not interfere with the relationship you have built.',
  },
  {
    question: 'Can I return a second time?',
    answer: 'Pro Bono Zone™ is not meant to be an ongoing free legal service for individuals. Think of it more as a jumpstart. However, depending on your circumstances, it may be possible to have a second free consultation. Pro Bono Zone™ is expanding nationwide. We host as many events in each area as possible. However, we cannot guarantee future events in each area. Talk with an event staff member for more information about your locality.',
  },
  {
    question: 'Do I need to select an area of interest?',
    answer: 'Yes, when you register for an event, we highly recommend that select a legal area of interest (e.g. immigration, family law, business, etc.). Different attorneys tend to specialize in specific areas of the law. Yes, it is true many lawyers are knowledgeable on a variety of topics; however, by talking to someone who has expertise in your particular area of interest, you are more likely to get the best possible advice.',
  },
  {
    question: 'How did  Pro Bono Zone™ start? ',
    answer: 'Pro Bono Zone™ is the brainchild of Kevin Cannon and SarahAnne Prior. Their personal experiences led them to the conclusion that there were many people who could benefit greatly from a service like this. You can read their story in the "About" section.',
  },
];

export default function index()
{
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>
  {
    if (activeIndex === index)
    {
      setActiveIndex(null);
    } else
    {
      setActiveIndex(index);
    }
  };
  document.title = "FAQ"
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
            <Navbar general={true}/>

      <div className="bg-[#EAEFF8] pt-2 pb-5">

        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7] font-inter font-semibold text-3xl leading-10 w-full mb-5"
          >
            Frequent Questions
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-0 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">FAQ</h2>
          </div>

        </div>



      </div>




      <div className="bg-white p-2 pr-5 lg:pr-9 lg:ml-44">
        <div className="max-w-2xl mb-10">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="flex justify-start items-center w-full focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-left">
                  {faq.question}
                </h3>
                <div className={`ml-3 transition-transform ${activeIndex === index ? 'transform rotate-0' : 'transform rotate-180'
                  }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#061133] p-2">
        <Footer />
      </div>
    </>
  );
}
