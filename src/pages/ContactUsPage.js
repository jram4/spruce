// src/pages/ContactUsPage.js
import React from 'react';
import contactBg from '../assets/contactbg.jpg'; // Consider if this background image is still appropriate for Spruce

const ContactUsPage = () => {
  // IMPORTANT: You will likely need to set up a new FormSubmit endpoint for Spruce Tower Apartments
  // and replace the URL below with the new one provided by FormSubmit.
  const formSubmitActionUrl = "https://formSubmit.co/your_new_spruce_formsubmit_endpoint"; // UPDATE THIS URL

  // Define Spruce brand colors (replace with your actual Tailwind classes)
  const sprucePrimaryColor = "text-teal-700"; // Example: A deep teal
  const sprucePrimaryBorderColor = "border-teal-700/50"; // Example
  const spruceFocusRingColor = "focus:ring-teal-500"; // Example
  const spruceFocusBorderColor = "focus:border-teal-500"; // Example
  const spruceButtonBgColor = "bg-teal-600"; // Example
  const spruceButtonHoverBgColor = "hover:bg-teal-700"; // Example

  return (
    <div className="bg-white">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center py-20 md:py-32 lg:py-40"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Box: Leasing Office */}
            <div className={`bg-white bg-opacity-90 p-8 md:p-10 rounded-md shadow-xl border ${sprucePrimaryBorderColor} text-center space-y-6`}>
              <h2 className={`text-2xl font-semibold uppercase tracking-wider ${sprucePrimaryColor}`}>
                Leasing Office
              </h2>
              <div className="text-gray-700 space-y-1">
                <p>1228 Spruce Street</p> {/* UPDATED ADDRESS */}
                <p>Philadelphia, PA 19107</p> {/* UPDATED ZIP */}
                {/* IMPORTANT: Update phone number if different for Spruce Tower */}
                <p className="font-medium pt-1">(833) 533-4371</p>
              </div>
              <hr className="border-t border-gray-300 w-1/2 mx-auto" />
              <div>
                <h3 className={`text-xl font-semibold uppercase tracking-wider ${sprucePrimaryColor} mb-2`}>
                  Schedule Your Visit
                </h3>
                <p className="text-gray-600">
                  Now offering virtual and in-person tours. Contact us to learn more!
                </p>
              </div>
            </div>

            {/* Right Box: Contact Us Form */}
            <div className={`bg-white bg-opacity-90 p-8 md:p-10 rounded-md shadow-xl border ${sprucePrimaryBorderColor}`}>
              <h2 className={`text-2xl font-semibold uppercase tracking-wider ${sprucePrimaryColor} text-center mb-8`}>
                Contact Us
              </h2>
              <form
                action={formSubmitActionUrl}
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit customization */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Spruce Tower Apartments" /> {/* UPDATED SUBJECT */}
                
                {/* OPTIONAL: Redirect to a custom thank you page on your site. Create this page first. */}
                {/* Example: <input type="hidden" name="_next" value="https://your-spruce-site.com/thank-you" /> */}
                
                <input type="hidden" name="_replyto" />

                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="form_subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="form_subject"
                    id="form_subject"
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${spruceFocusRingColor} ${spruceFocusBorderColor} sm:text-sm`}
                  ></textarea>
                </div>
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className={`inline-flex justify-center py-2.5 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${spruceButtonBgColor} ${spruceButtonHoverBgColor} focus:outline-none focus:ring-2 focus:ring-offset-2 ${spruceFocusRingColor} transition-colors`}
                  >
                    Send Message {/* Changed button text slightly */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;