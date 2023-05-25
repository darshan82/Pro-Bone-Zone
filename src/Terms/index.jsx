import React, { useEffect, useRef, useState } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import Footer from "../component/Footer"
export default function index()
{
  document.title = "Terms";
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="bg-[#EAEFF8] pt-2 pb-5">
        {/* <Navbar /> */}
        {/* Hero Section */}

        <div className="flex flex-col  ml-10  md:ml-20 lg:ml-44  sm:ml-10 sm:justify-center md: items-start justify-center ">
          <h1
            className=" text-[#2E5FB7] lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
          >
            Terms And Conditions
          </h1>
          <div className="flex flex-row items-center mt-8 mb-12 ml-1 md:ml-2 sm:ml-4 ">
            <h2 className="text-md ">Home</h2>
            <img src={ArrowRight} alt="Arrow Right" className="mx-3" />
            <h2 className="text-md ">Terms</h2>
          </div>
        </div>
      </div>

      {/* A Smart Solution */}
      <div className="bg-white p-2 pl-2 ml-0  sm:pl-2 pr-3 lg:pr-9 lg:ml-44 ">
        <div className="max-w-full mb-10  ml-0 sm:ml-0 lg:ml-0">
          <div class="container mx-auto py-8 ml-2 ">
            <h2 class="text-2xl font-bold mb-4 pl-8  sm:pl-5 sm:ml-1 md:pl-[55px] lg:pl-0">Usage Agreement</h2>
          </div>
          <div class="bg-gray-100 p-6 mb-6  sm:pl-2 md:pl-4">

            <div class="mb-4">
              <h2 class="text-xl font-bold mb-4">
                1.  We Provide Our Sites for Your Convenience Only!
              </h2>
              <p>
                Our Sites are provided to you without charge as a convenience
                and for your information only. By merely providing access to our
                Sites, we do not warrant or represent that:
              </p>
              <ul class="list-disc list-inside pl-4">
                <li class="mb-1">The content is accurate or complete;</li>
                <li class="mb-1">The content is up-to-date or current;</li>
                <li class="mb-1">We have a duty to update any content;</li>
                <li class="mb-1">
                  The content is free from technical inaccuracies or
                  typographical errors;
                </li>
                <li class="mb-1">
                  The content is free from changes caused by a third party; and
                </li>
                <li class="mb-1">
                  Your access to our Sites will be free from interruptions,
                  errors, computer viruses, or other harmful components.
                </li>
              </ul>
              <p>
                We do not assume any liability for these matters. In other
                words, you use our Sites at your own risk.
              </p>
            </div>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              2. We Provide Our Sites “As Is” and Disclaim All Warranties
            </h2>
            <p class="mb-4">
              Our Sites, including all content, software, and functions made
              available on or accessed through our Sites, is provided “as is,
              where is” and “as available”. To the fullest extent permissible by
              law, we and any subsidiaries and affiliates make no
              representations or warranties of any kind as to the content,
              software, or functions accessed through our Sites, for any
              products or services or links to third parties or for any breach
              of security associated with the transmission of sensitive
              information through our Sites or any linked site.
            </p>
            <p class="mb-4">
              WE AND OUR SUBSIDIARIES AND AFFILIATES DISCLAIM ANY EXPRESS OR
              IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION,
              NON-INFRINGEMENT, QUIET ENJOYMENT, QUALITY OF INFORMATION,
              MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THIS INCLUDES
              LOSS OF DATA OR PROFIT ARISING OUT OF THE USE OR THE INABILITY TO
              USE THE CONTENT OR ANY UPLOADED CONTENT ON OUR SITES. WE DO NOT
              WARRANT THAT ANY CONTENT OR INFORMATION ACCESSED THROUGH OUR SITES
              WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
              CORRECTED, OR THAT OUR SITES OR THE SERVER THAT MAKES IT AVAILABLE
              IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p class="mb-4">
              IN NO EVENT SHALL PBZ OR ANY OF ITS DIRECTORS, OFFICERS,
              EMPLOYEES, AGENTS, AFFILIATES, SPONSORS, OR SERVICE PROVIDERS BE
              LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM OR
              DIRECTLY OR INDIRECTLY RELATED TO THE USE OF, OR THE INABILITY TO
              USE, OUR SITES, EVEN IF PBZ OR ITS REPRESENTATIVES HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p class="mb-4">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. IN SUCH
              JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT
              PERMITTED BY LAW.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              3. We Do Not Have Responsibility for Links to Third Party Content
            </h2>
            <p class="mb-4">
              We may provide hyperlinks or pointers to other websites maintained
              by third parties or may provide third-party content on our sites
              through framing or other methods. The links to third-party
              websites are provided for your convenience and information only.
              We do not have control over the content in any linked website,
              including any further links within a third-party site.
            </p>
            <p class="mb-4">
              Therefore, we are not responsible for the content or any
              consequences resulting from accessing these third-party sites. If
              you choose to access any of the third-party sites linked from our
              web Sites, you do so entirely at your own risk. It is your
              responsibility to take precautions to ensure that the third-party
              website you visit is free of computer viruses, worms, trojan
              horses, and other items of a destructive nature.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              4. If We Provide a Link, We Do Not Necessarily Endorse a Third
              Party
            </h2>
            <p class="mb-4">
              We reserve the right to terminate a link to a third-party website
              at any time. The inclusion of a link to a third-party website does
              not imply our endorsement, adoption, authorization, or sponsorship
              of that website. It also does not imply any affiliation with the
              owners or sponsors of the third-party website.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              5. If a Third-Party Links to Our Sites, it is Not an Endorsement
              Third-Party Links and Confidentiality
            </h2>
            <p class="mb-4">
              If a third-party links to our Sites, it does not necessarily
              indicate endorsement, adoption, authorization, sponsorship,
              affiliation, joint venture, or partnership with us. In most cases,
              we are unaware of third-party links to our Sites. When linking to
              our Sites, the third-party should:
            </p>
            <ul class="list-disc ml-8 mb-4">
              <li>Link to our content without replicating it</li>
              <li>Not create a browser or frame our content</li>
              <li>Not imply endorsement by us</li>
              <li>Not misrepresent its relationship with us</li>
              <li>
                Not provide false information about our products or services
              </li>
              <li>
                Not contain distasteful, offensive, or controversial content,
                and should be appropriate for all age groups
              </li>
            </ul>
            <p class="mb-4">
              When you transmit or post data on our Sites, it will be treated as
              non-confidential to those you allow or invite to see, but it will
              be treated as confidential to other PBZ members. Any material,
              data, information, or ideas transmitted to or posted on our Sites
              may be used by PBZ for any purposes, including research,
              development, manufacture, use, or sale of products incorporating
              such information. The sender of the information is fully
              responsible for its content, including non-offensiveness,
              truthfulness, accuracy, and non-infringement of any other person
              or organization.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              6. By Providing Content, We Do Not Allow You to Use Our Trademarks
            </h2>
            <p class="mb-4">
              The trademarks, service marks, and logos displayed on our Sites
              are registered and unregistered trademarks owned by us. No license
              or right to use any trademark is granted by accessing or using our
              Sites. Without our written permission, you may not:
            </p>
            <ul class="list-disc ml-8 mb-4">
              <li>
                Use our trademarks in any manner, including advertising or
                publicity related to the distribution of materials on our Sites
              </li>
              <li>
                Use any metatags or hidden text containing our names or
                trademarks
              </li>
              <li>
                Use our logo as a hyperlink to our Sites without our prior
                written consent
              </li>
            </ul>
            <p class="mb-4">
              We are committed to protecting our intellectual property rights
              and take action to enforce them. To use our trademarks or logos,
              including as a hyperlink, you must obtain our advance written
              permission.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              7. All Content on Our Sites is Copyrighted
            </h2>
            <p class="mb-4">
              All content included on our Sites, including materials, documents,
              text, designs, graphics, logos, images, audio, and video
              ("Content"), is the property of PBZ or its affiliates and
              suppliers, and is protected by United States and international
              copyright laws. The compilation and "look and feel" of all Content
              on our Sites is the exclusive property of PBZ and is also
              protected by United States and international copyright laws.
            </p>
            <p class="mb-4">
              You may not inline, frame, or utilize framing techniques to
              enclose any trademark, logo, or other proprietary information of
              PBZ, including images, text, page layout, or form, without our
              prior express written permission.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              8. You Must Obey Local Laws in Accessing Our Sites
            </h2>
            <p class="mb-4">
              This Site is controlled by us from our offices within the United
              States of America. We make no representation that the content or
              materials on the Site are appropriate or available for use in
              other jurisdictions. Access to our Site's content or materials
              from jurisdictions where such access is illegal is prohibited. If
              you choose to access this Site from other jurisdictions, you do so
              at your own initiative and are responsible for compliance with
              applicable local laws. We are not responsible for any violations
              of the law.
            </p>
            <p class="mb-4">
              You may not use or export the materials on this Site in violation
              of U.S. export laws and regulations.
            </p>
          </div>

          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              9. You are Bound by Changes in these Terms and Conditions
            </h2>
            <p class="mb-4">
              We may at any time revise these Terms and Conditions by updating
              this page. By using our Sites, you agree to be bound by any such
              revisions and should therefore periodically visit this page to
              determine the then current terms and conditions to which you are
              bound. Certain provisions of these Terms and Conditions may be
              superseded by other legal notices or terms located on parts of our
              Sites.{" "}
            </p>
          </div>

          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              10.  You Agree to Indemnify Us for Using Our Sites
            </h2>
            <p class="mb-4">
              their respective officers, directors, owners, agents, employees,
              information providers, licensors and licensees (collectively, the
              “Indemnified Parties”) harmless from and against any and all
              liability and costs, including, without limitation, attorneys’
              fees and costs incurred by the Indemnified Parties in connection
              with any claim arising out of your use of our Sites or any breach
              by you of these Terms and Conditions, or the purchase by you of
              securities, including any liabilities associated with a violation
              of federal or state securities laws. If the indemnity provided in
              this paragraph is not available or is insufficient to hold
              harmless the Indemnified Parties for any reason, you agree to
              contribute to the aggregate losses, claims and liabilities to
              which the Indemnified Parties may be subject in such proportion as
              appropriate to reflect the relative fault by you and the
              Indemnified Parties with respect to the activity giving rise to
              the indemnity claim. You will cooperate as fully as reasonably
              required in the defense of any claim. We reserve the right, at our
              own expense, to assume the exclusive defense and control of any
              matter otherwise subject to indemnification by you and you will
              not in any event settle any such matter without our written
              consent.{" "}
            </p>
          </div>

          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              11.   Third Parties May Have Rights Under This Agreement
            </h2>
            <p class="mb-4">
              Some of the provisions of these Terms and Conditions are for the
              benefit of PBZ and its subsidiaries, affiliates, officers,
              directors, employees, agents, licensors and suppliers. Each of
              these individuals or entities shall have the right to assert and
              enforce those provisions directly against you on its own behalf.
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              12.   How This Agreement May Be Terminated
            </h2>
            <p class="mb-4">
              These Terms and Conditions may be terminated by either party
              without notice at any time for any reason; provided that you may
              no longer use our Sites after you have terminated this agreement.
              Provisions 2, 5, 6, 7, 8, 9, 10, 11, 12, 13 and 14 of these Terms
              and Conditions shall survive any termination.{" "}
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">
              13. Governing Law and Arbitration
            </h2>
            <p class="mb-4">
              Any legal issues arising from or related to your visit to the
              Sites or services provided through our Sites shall be construed in
              accordance with, and all questions with respect thereto shall be
              determined by, the laws of the State of Utah applicable to
              contracts entered into and wholly to be performed within that
              state. Any controversy or claim arising out of or relating to
              these Terms and Conditions and any use of our Sites shall be
              settled by binding, confidential arbitration in accordance with
              the commercial arbitration rules of the American Arbitration
              Association. Any such controversy or claim shall be arbitrated on
              an individual basis, and shall not be consolidated in any
              arbitration with any claim or controversy of any other party. The
              arbitration shall be conducted in Salt Lake City, Utah, and
              judgment on the arbitration award may be entered into in any state
              or federal court in Utah having jurisdiction thereof. Any party
              seeking temporary or preliminary injunctive relief may do so in
              any state or federal court in Utah having jurisdiction thereof.
              Except as set forth above, the state and federal courts of Utah
              shall be the exclusive forum and venue to resolve disputes arising
              out of or relating to these Terms and Conditions or any use of
              merchandise sold through our Sites. By using our Sites, and
              thereby agreeing to these Terms and Conditions, users consent to
              personal jurisdiction and venue in the state and federal courts in
              Utah with respect to all such disputes.{" "}
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">Miscellaneous</h2>
            <p class="mb-4">
              Our failure to insist upon or enforce strict performance of any
              provision of these Terms and Conditions shall not be construed as
              a waiver of any provision or right. Neither the course of conduct
              between the parties nor trade practice shall act to modify any
              provision of these Terms and Conditions. We may change, suspend or
              discontinue any aspect of our Sites or service at any time. PBZ
              reserves the right to change system configurations, product
              specifications, upgrades, pricing, layouts, options and any other
              specifications at any time without notice. We may also impose
              limits or restrictions on certain services, features or content or
              restrict your access to parts or all of our Sites without notice
              or liability.{" "}
            </p>
          </div>
          <div class="bg-gray-100 p-6 mb-6">
            <h2 class="text-xl font-bold mb-4">Contact Us</h2>
            <p class="mb-4">
              If you have any questions or comments about these Terms and
              Conditions or the manner in which we or our service providers
              treat your personal information, or if you would like to exercise
              your choices or update the information we have about you or your
              preferences, please feel free to contact us:
            </p>
            <p class="mb-4">
              Email:{" "}
              <a
                href="mailto:contact@probonozone.com"
                class="text-blue-500 underline"
              >
                contact@probonozone.com
              </a>
            </p>
            <p>Phone: 1-800-626-1195</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
