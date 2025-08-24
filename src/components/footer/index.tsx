import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white sm:mb-0 mb-[68px]">
      <div className="max-w-screen-xl mx-auto px-[6.2%] py-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section - Logo and Contact */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src='/logo-white.avif' alt='logo icon' className='w-[145px] h-auto mb-4' />
            </div>

            <div className="space-y-3 text-[#999999]">
              <div className="flex items-center gap-3">
                <PhoneCall strokeWidth={2} className="w-5 text-[#ff0030]" />
                <span>8555390003</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin strokeWidth={2} className="w-5 text-[#ff0030]" />
                <span>115 2nd Ave N, Saskatoon, SK</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail strokeWidth={2} className="w-5 text-[#ff0030]" />
                <span>store@vukaya.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <FaFacebookF className="" />
              </div>
              <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <FaTwitter className="" />
              </div>
              <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <span className=" font-bold">in</span>
              </div>
              <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <FaInstagram className="" />
              </div>
            </div>
          </div>

          {/* Find Categories Desktop*/}
          <div className="lg:block hidden">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              FIND CATEGORIES
            </h3>
            <ul className="space-y-2 text-[#999999]">
              <li><a href="#" className="hover:text-white">Search</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact Information</a></li>
              <li><a href="#" className="hover:text-white">Delete Account</a></li>
            </ul>
          </div>

          {/* My Account Desktop */}
          <div className="lg:block hidden">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              MY ACCOUNT
            </h3>
          </div>

          {/* Newsletter Desktop*/}
          <div className="sm:block hidden">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              JOIN OUR NEWSLETTERS
            </h3>
            <p className=" text-[#999999] mb-4">
              Subscribe the newsletter for all the latest updates
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your mail.."
                className="w-full px-4 py-3 bg-white text-gray-800  border-none outline-none"
              />
              <button className="w-full bg-[#c00202] text-white py-3 px-6 font-semibold  hover:bg-red-700 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Find Categories Mobile */}
          <div className="lg:hidden block">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              FIND CATEGORIES
            </h3>
            <ul className="space-y-2 text-[#999999]">
              <li><a href="#" className="hover:text-white">Search</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact Information</a></li>
              <li><a href="#" className="hover:text-white">Delete Account</a></li>
            </ul>
          </div>

          {/* My Account Mobile */}
          <div className="lg:hidden block">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              MY ACCOUNT
            </h3>
          </div>

          {/* Newsletter Mobile*/}
          <div className="sm:hidden block">
            <h3 className="text-[#c00202] font-semibold  mb-4 uppercase tracking-wide">
              JOIN OUR NEWSLETTERS
            </h3>
            <p className=" text-[#999999] mb-4">
              Subscribe the newsletter for all the latest updates
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your mail.."
                className="w-full px-4 py-3 bg-white text-gray-800  border-none outline-none"
              />
              <button className="w-full bg-[#c00202] text-white py-3 px-6 font-semibold  hover:bg-red-700 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600">
        <div className="max-w-screen-xl mx-auto px-[6%] sm:py-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className=" text-[#999999] sm:mb-4 mb-3 md:mb-0 font-[200]">
            © 2025, Vukaya
          </div>
          <div className="flex gap-2 sm:mb-0 mb-2">
            {/* Visa */}
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-visa"
              className="h-6"
            >
              <title id="pi-visa">Visa</title>
              <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
              <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
            </svg>

            {/* PayPal */}
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-paypal"
              className="h-6"
            >
              <title id="pi-paypal">PayPal</title>
              <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
              <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path>
              <path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path>
              <path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path>
            </svg>

            {/* Mastercard */}
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-master"
              className="h-6"
            >
              <title id="pi-master">Mastercard</title>
              <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
              <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
              <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
            </svg>

            {/* American Express */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-american_express"
              viewBox="0 0 38 24"
              width="38"
              height="24"
              className="h-6"
            >
              <title id="pi-american_express">American Express</title>
              <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path>
              <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
              <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path>
              <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path>
              <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path>
              <path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path>
              <path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path>
              <path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path>
            </svg>
          </div>

        </div>
      </div>
    </footer>
  );
};

export { Footer };