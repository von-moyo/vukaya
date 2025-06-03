import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The time and cost savings, improved efficiencies, and the confidence gained from better protecting our ‘house’ have delivered the return on investment we’d hoped for. However, what sets Fortified apart is how they conduct their business. We’ve dealt with vendors who disappear after implementing their service or solution, but that’s not the case with Fortified. We have ongoing communication with multiple team members who genuinely care about helping us safeguard our organization, patients, and community. It’s a true partnership.",
    author: "Ann Wright, Director of IT and Informatics",
    org: "OrthoNebraska Hospital",
  },
  {
    text: "Partnering with Fortified and our incredible VISO has given me peace of mind. We’re not only doing the right things to protect our hospital and our patients, but we’re also building confidence and trust in the process, which is vital. The strides we’ve made since joining forces with Fortified have been nothing short of revolutionary, and I can’t express enough how much of a positive impact they’ve had within our organization.",
    author: "CIO",
    org: "Health System",
  },
  {
    text: "With Fortified, I don’t have to sit there and explain repeatedly why I can’t do something or why we can’t patch a certain vulnerability related to a medical device. They already know the answer. In fact, many times they guide me on what we should do so that we don’t inadvertently break something critical to serving patients. Having a partner with that experience and expertise is priceless.",
    author: "ISO",
    org: "Health System",
  },
];

export default function Testimoninals() {
  return (
    <section className="relative py-20 overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url('https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/pattern-hd.png')`,
        backgroundPosition: 'center -100px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 40px 30px -30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="absolute inset-0">
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What It’s Like <br /> Working With <span className="text-[#2ea38f]">Fortified</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          centeredSlides={false}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible h-full flex flex-col"
        >
          <div className="flex-1 flex items-center">
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto flex items-center my-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${index === 0 ? "swiper-slide-active:scale-100" : "scale-75"} relative mx-auto my-auto max-w-xl text-center swiper-slide-active:scale-100 transition-transform duration-300`}
                  style={{
                    borderRadius: '10px',
                    padding: '60px',
                    background: 'linear-gradient(to bottom, #fff 0%, #fff 50%, #D1F2EC 100%)',
                    boxShadow: '10px 10px 16px 10px rgba(112, 112, 112, 0.2)',
                    margin: '-5px',
                  }}
                >
                  <p className="text-lg font-medium italic mb-6 text-[#414141]">"{item.text}"</p>
                  <p className="font-semibold">– {item.author}</p>
                  <p className="text-sm text-[#414141]">{item.org}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>

          {/* Custom pagination container - positioned further below */}
          <div className="custom-pagination mt-10 !relative" />
        </Swiper>
      </div>
    </section>
  );
}
