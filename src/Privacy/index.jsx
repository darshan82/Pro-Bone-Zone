import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/navbar";

export default function index()
{
  document.title = "Privacy";

  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
            <Navbar general={true}/>

      <div className="bg-[#EAEFF8] pt-2 pb-5">
        {/* <Navbar /> */}
        {/* Hero Section */}

        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
          >
            Privacy Notice
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-0 md:ml-1 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">Privacy</h2>
          </div>
        </div>
      </div>

      {/* A Smart Solution */}
      <div className="bg-white p-2 pl-3 pr-5 lg:pr-9 lg:ml-44 ">
        <div className="max-w-full mb-10 ">
          <div class="container mx-auto py-8">
            <h2 class="text-2xl font-bold mb-4">
              PRO BONO ZONE, LLC. Privacy Notice
            </h2>
            <p class="font-bold">Effective Date: May 11, 2023</p>

            <div class="container mx-auto py-8   ">
              <div class="bg-gray-100 p-6 mb-6">
                <p class="mb-4">
                  We at Pro Bono Zone (“Company”), respect your concerns about
                  privacy. This Privacy Notice (“Notice”) applies to personal
                  customer information obtained by the Company, including
                  through web sites, mobile sites, applications (“apps”) and
                  widgets (collectively, the “Services”).
                </p>
                <p class="mb-4">
                  The Notice describes the types of personal information we
                  obtain about customers, how we use the information and with
                  whom we share it. We also describe the measures we take to
                  protect the security of the information and how you can
                  contact us about our privacy practices. The Services are for a
                  general audience, are not targeted to children, and we do not
                  knowingly collect personal information from children under 18
                  years of age.
                </p>
              </div>

              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">Information We Obtain</h2>
                <p class="mb-4">
                  We obtain personal information about customers through the
                  Services, publicly and commercially available sources and from
                  our Company affiliates and/or business partners. The types of
                  personal information we may obtain include:
                </p>
                <ul class="list-disc ml-6 mb-4">
                  <li>
                    Contact information (such as name, postal address, email
                    address and telephone and/or mobile numbers)
                  </li>
                  <li>
                    Username and password when you register through our Services
                  </li>
                  <li>Geolocation data</li>
                  <li>
                    Other information you may provide to us, such as through our
                    “Submit a Request” or “Contact Us” feature
                  </li>
                  <li>Purchase history with our branded online stores</li>
                </ul>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  Information Obtained by Automated Means Through Our Services
                </h2>
                <p class="mb-4">
                  We also may obtain certain information through our Services by
                  automated means, such as cookies (including HTTP, HTML5 and
                  Flash cookies), web beacons, web server logs, JavaScript and
                  similar technologies, including technologies designed to
                  obtain information regarding your use of our Services. The
                  information we obtain in this manner may include IP address,
                  mobile device advertising ID, browser characteristics, device
                  characteristics, operating system, language preferences,
                  referring URLs, information on actions taken on our Services,
                  and dates and times you access or use the Services. In
                  connection with our mobile apps, we also may obtain your phone
                  number and details about your mobile carrier. A “cookie” is a
                  file that websites send to a visitor’s computer or other
                  Internet-connected device to uniquely identify the visitor’s
                  browser or to store information or settings in the browser. A
                  “web beacon” also known as an Internet tag, pixel tag or clear
                  GIF, links web pages to web servers and their cookies and may
                  be used to transmit information collected through cookies back
                  to a web server. Through these automated collection methods,
                  we obtain “clickstream data,” which is a log of the links and
                  other content on which a visitor clicks while browsing a
                  website. As the visitor clicks through the website, a record
                  of the action may be collected and stored. We also may use
                  similar automated means to obtain and store information
                  regarding your actions while using our mobile apps. We may
                  link certain data elements obtained through automated means,
                  such as your browser or device information, with other
                  information we have obtained about you to let us know, for
                  example, whether you have opened an email we sent to you, what
                  search queries you may have run and what advertisements you
                  may have seen on our Services or on third-party websites and
                  apps. Your browser may tell you how to be notified when you
                  receive certain types of cookies or how to restrict or disable
                  certain types of cookies. You also may be able to delete your
                  Flash cookies or adjust your Flash cookie settings by visiting
                  the Adobe Flash Website Storage Settings Panel and Global
                  Storage Settings Panel. Please note, however, that without
                  cookies you may not be able to use all of the features of our
                  Services. Your device settings also may allow you to prohibit
                  mobile app platforms (such as Apple and Google) from sharing
                  certain information obtained by automated means with us
                  through our apps or other app developers. In addition, if you
                  register with us through or connect your account with us to a
                  third-party social media network (such as Google or Twitter),
                  we may obtain certain information about you from the relevant
                  social media network, such as your user ID and/or user name
                  associated with that social media network, the information
                  contained in your public profile on the social media network
                  and friends lists. The specific information we obtain depends
                  on your privacy settings on the applicable social media
                  network. The providers of third-party apps, tools, widgets and
                  plug-ins on our Services, such as social media sharing tools,
                  also may use automated means to collect information regarding
                  your interactions with these features. This information is
                  collected directly by the providers of those features and is
                  subject to the privacy policies or notices of those providers.
                  The Company is not responsible for those providers’
                  information practices.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  How We Use the Information We Obtain
                </h2>
                <p class="mb-4">
                  We may use the information collected from and about you to:
                </p>
                <ul class="list-disc ml-6 mb-4">
                  <li>Provide our products and services;</li>
                  <li>Create and manage online accounts;</li>
                  <li>
                    Send promotional materials, alerts regarding available
                    offers and other communications, including communications
                    through the Services and outside of the Services, such as
                    via email and through third-party websites and apps;
                  </li>
                  <li>
                    Communicate about, and administer participation in, special
                    events, promotions, programs, offers, surveys, contests, and
                    market research;
                  </li>
                  <li>
                    Respond to inquiries from you and other third parties,
                    including inquiries from law enforcement agencies;
                  </li>
                  <li>
                    Anonymize personal information to provide third parties with
                    aggregated data reports showing anonymized information and
                    other non-personal information;
                  </li>
                  <li>
                    Supplement your personal information collected from you with
                    additional information from publicly and commercially
                    available sources, and/or information from Company
                    affiliates and our business partners;
                  </li>
                  <li>
                    Associate your browser and/or device with other browsers and
                    devices you use for the purpose of providing relevant and
                    easier access to content, advertising across browsers and
                    devices, and other operational/business purposes;
                  </li>
                  <li>
                    Operate, evaluate and improve our business (including
                    developing, enhancing, analyzing, and improving our
                    Services; managing our communications; performing data
                    analytics; and performing accounting, auditing, and other
                    internal functions);
                  </li>
                  <li>
                    Protect against, identify and prevent fraud and other
                    unlawful activity, claims, and other liabilities; and
                  </li>
                  <li>
                    Comply with and enforce applicable legal requirements,
                    relevant industry standards, contractual obligations, and
                    our policies.
                  </li>
                </ul>
                <p class="mb-4">
                  In addition, we and our third-party service providers may use
                  information collected through automated means, including
                  cookies, web beacons, web server logs, JavaScript, and similar
                  technologies for purposes such as:
                </p>
                <ol class="list-decimal ml-6 mb-4">
                  <li>
                    Customizing our users' visits to and use of our Services;
                  </li>
                  <li>
                    Delivering content (including advertising) tailored to our
                    users' interests and the manner in which our users use our
                    Services; and
                  </li>
                  <li>
                    Managing our Services and other aspects of our business.
                  </li>
                </ol>
                <p class="mb-4">
                  We may use third-party analytics services on our Services,
                  such as those of Google Analytics. The analytics providers
                  that administer these services use technologies such as
                  cookies, web beacons, web server logs, and similar
                  technologies to help us analyze your use of the Services. The
                  information collected through these means may be disclosed to
                  these analytics providers and other relevant third parties who
                  use the information, for example, to evaluate the use of the
                  Services. To learn more about how to opt out of Google
                  Analytics services, please visit the following link:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-Out
                  </a>
                  .
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">Advertising</h2>
                <p class="mb-4">
                  On our site,{" "}
                  <strong class="text-blue-500">WE DO NOT ALLOW</strong>{" "}
                  third-party service providers to obtain information about your
                  activities as most sites do to provide you with advertising
                  about products and services tailored to your individual
                  interests. We have our own in-house advertising department
                  controlling all advertising content displayed, thereby
                  minimizing the risk of the social media giants extracting
                  personal data from you.
                </p>
                <p class="mb-4">
                  Our sites are not designed to respond to{" "}
                  <span class="italic">"do not track"</span> signals from
                  browsers.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">SMS/MMS Advertising</h2>
                <p class="mb-4">
                  By electing to submit your mobile phone number, you consent to
                  receive text message alerts from the Company containing
                  product/service and event information or promotions that may
                  be sent using automated dialing systems ("Text Messages").
                  Your consent to receive Text Messages is not otherwise
                  required to purchase any goods or services from us. You may
                  not consent to receive Text Messages on behalf of someone else
                  or provide someone else's phone number. You agree to enter
                  into, sign and receive your consent to receive Text Messages
                  electronically.
                </p>
                <p class="mb-4">
                  The number of recurring Text Messages you receive per month
                  may vary based upon the Service you have subscribed to. We do
                  not charge a fee for you to receive Text Messages from us;
                  however, your mobile service provider may charge you for
                  sending and/or receiving text messages and airtime, as well as
                  any other standard applicable rates charged by your mobile
                  service provider.
                </p>
                <p class="mb-4">
                  You may unsubscribe from receiving our Text Messages by
                  contacting us or replying "STOP" to any Text Message received
                  in connection with such subscription.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">Information We Share</h2>
                <p class="mb-4">
                  We may share customer personal information with:
                </p>
                <ul class="list-disc ml-6 mb-4">
                  <li>
                    Our subsidiaries and affiliates, any of whom may use your
                    personal information consistent with this Privacy Notice or
                    for the subsidiaries or affiliate's own purposes, including
                    marketing purposes.
                  </li>
                  <li>
                    Service providers in the US and other jurisdictions who
                    perform services on our behalf.
                  </li>
                  <li>
                    Our third-party clients or business partners, for their own
                    marketing purposes, may send you information about their
                    publications or services.
                  </li>
                </ul>
                <p class="mb-4">
                  In addition, when the information collected from or about you
                  does not identify you as a specific person, we may share it
                  with third parties.
                </p>
                <p class="mb-4">
                  We may further disclose information about you:
                </p>
                <ol class="list-decimal ml-6 mb-4">
                  <li>If we are required to do so by law or legal process.</li>
                  <li>
                    To law enforcement authorities or other government
                    officials.
                  </li>
                  <li>
                    When we believe disclosure is necessary or appropriate to
                    prevent physical harm or financial loss, or in connection
                    with an investigation of suspected or actual fraudulent or
                    illegal activity.
                  </li>
                </ol>
                <p class="mb-4">
                  We also reserve the right to transfer personal information we
                  have about you in the event of a proposed or completed sale or
                  transfer of all or a portion of our business or assets
                  (including in the event of a reorganization, dissolution, or
                  liquidation).
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  Accessing, Reviewing, Updating and Modifying Personal
                  Information
                </h2>
                <p class="mb-4">
                  You have the right to access, review, update, and correct
                  inaccuracies in your personal information in our custody and
                  control, subject to certain exceptions prescribed by law. You
                  may request access, updates, and corrections of inaccuracies
                  in your personal information by emailing or calling us at the
                  contact information set out below. We may request certain
                  personal information for the purposes of verifying the
                  identity of the individual seeking access to his/her personal
                  information records.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  Notice to California Residents
                </h2>
                <p class="mb-4">
                  Subject to certain limitations, California residents may ask
                  us to provide them with:
                </p>
                <ol class="list-decimal ml-6 mb-4">
                  <li>
                    A list of certain categories of personal information that we
                    have disclosed to third parties for their direct marketing
                    purposes during the immediately preceding calendar year, and
                  </li>
                  <li>The identity of those third parties.</li>
                </ol>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  How We Protect Personal Information
                </h2>
                <p class="mb-4">
                  We maintain administrative, technical, and physical safeguards
                  designed to protect the personal information we have about you
                  against accidental, unlawful, or unauthorized destruction,
                  loss, alteration, access, disclosure, or use.
                </p>
              </div>

              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">Transfers of Information</h2>
                <p class="mb-4">
                  The Services may be hosted in and managed from a country
                  outside the country in which you initially provided the
                  information, including the United States. We may transfer the
                  personal information we collect about you to the United States
                  and/or another country, which may not be deemed to have the
                  same data protection laws as the country in which you
                  initially provided the information. When your personal
                  information is in such countries, it may be accessed by the
                  courts, law enforcement, and national security authorities in
                  accordance with applicable law. If you are a user located
                  outside the United States or the country to which your
                  information may be transferred, you understand and consent to
                  having any personal information processed in the United States
                  and/or such country. Your consent includes the use of cookies
                  and other tracking technologies as described above. When we
                  transfer your information, we will protect that information as
                  described in this Notice.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  Links to Third-Party Sites, Apps and Services
                </h2>
                <p class="mb-4">
                  For your convenience and information, our Services may provide
                  links to third-party sites, apps, and services that may be
                  operated by companies not affiliated with the Company. These
                  companies may have their own privacy notices or policies,
                  which we strongly suggest you review. We are not responsible
                  for the privacy practices of any non-Pro Bono Zone sites,
                  apps, or services.
                </p>
              </div>

              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">
                  Updates to Our Privacy Notice
                </h2>
                <p class="mb-4">
                  This Privacy Notice may be updated periodically and without
                  prior notice to you to reflect changes in our personal
                  information practices. For significant changes, we will notify
                  you by posting a prominent notice on our Services indicating
                  at the top of the Notice when it was most recently updated.
                </p>
              </div>
              <div class="bg-gray-100 p-6 mb-6">
                <h2 class="text-xl font-bold mb-4">How to Contact Us</h2>
                <p class="mb-4">
                  If you have any questions or comments about this Privacy
                  Notice or the manner in which we or our service providers
                  treat your personal information, or would like to exercise
                  your choices, or would like us to update information we have
                  about you or your preferences, please contact us as follows:
                </p>
                <p class="mb-4">
                  Email:{" "}
                  <a
                    href="mailto:contact@probonozone.com"
                    class="text-blue-500 font-medium"
                  >
                    contact@probonozone.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <span class="text-blue-500 font-medium">1 800-626-1195</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}
