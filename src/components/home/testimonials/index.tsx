import React, { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The time and cost savings, improved efficiencies, and the confidence gained from better protecting our ‘house’ have delivered the return on investment we’d hoped for. However, what sets Qorwyn apart is how they conduct their business. We’ve dealt with vendors who disappear after implementing their service or solution, but that’s not the case with Qorwyn. We have ongoing communication with multiple team members who genuinely care about helping us safeguard our organization, patients, and community. It’s a true partnership.",
    author: "Ann Wright, Director of IT and Informatics",
    org: "OrthoNebraska Hospital",
  },
  {
    text: "Partnering with Qorwyn and our incredible VISO has given me peace of mind. We’re not only doing the right things to protect our hospital and our patients, but we’re also building confidence and trust in the process, which is vital. The strides we’ve made since joining forces with Qorwyn have been nothing short of revolutionary, and I can’t express enough how much of a positive impact they’ve had within our organization.",
    author: "CIO",
    org: "Health System",
  },
  {
    text: "With Qorwyn, I don’t have to sit there and explain repeatedly why I can’t do something or why we can’t patch a certain vulnerability related to a medical device. They already know the answer. In fact, many times they guide me on what we should do so that we don’t inadvertently break something critical to serving patients. Having a partner with that experience and expertise is priceless.",
    author: "ISO",
    org: "Health System",
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative pt-12  pb-20 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png')`,
        backgroundPosition: 'center -100px',
        boxShadow: 'inset 0 40px 30px -30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-5xl font-[900] text-[#414141] tracking-tight">
            What It’s Like <br className="md:hidden" /> Working With <span className="text-teal-600">Qorwyn</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
            horizontalClass: 'horizontal'
          }}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={1}
          spaceBetween={20}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${index === activeIndex ? "swiper-slide-active:scale-100" : "scale-85"} w-full max-w-md sm:max-w-lg lg:max-w-xl h-[400px] sm:h-[550px] lg:h-[600px] p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white to-teal-50 rounded-xl shadow-2xl transform transition-transform duration-300 swiper-slide-active:scale-100 swiper-slide:scale-90 mx-auto flex flex-col justify-center`}
              >
                <p className="text-base sm:text-lg lg:text-xl font-medium italic text-gray-600 mb-6 text-center line-clamp-15">"{item.text}"</p>
                <p className="font-semibold text-gray-800 text-center">– {item.author}</p>
                <p className="text-sm text-gray-500 text-center">{item.org}</p>

              </motion.div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-8 flex justify-center space-x-2" />
        </Swiper>
      </div>

      <style>{`
        .custom-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 20px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: #2ea38f;
          transform: scale(1.5);
        }
        .horizontal {
          margin-top-30px;
          bottom: -60px !important;
        }
      `}</style>
    </section>
  );
}