import React, { useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Initialize Swiper modules
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Autoplay, Pagination]);

const CaseStudySlider: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  const caseStudies = [
    {
      title: 'Middlesex Health Case Study',
      description: 'Cybersecurity staffing and budget constraints made it difficult for Middlesex Health to have the 24/7/365 security coverage they needed. Since partnering with Fortified, they’ve reduced operational expenses, eased stress, and are better equipped to respond to cyber incidents.',
      image: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/MiddlesexHealth_building.png',
      link: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/Middlesex-Health-Case-Study.pdf',
    },
    {
      title: 'OrthoNebraska Hospital Case Study',
      description: 'Faced with gaps in incident response and security operations, as well as needing well-rounded healthcare cybersecurity expertise, OrthoNebraska Hospital partnered with Fortified Health Security to help safeguard their organization, patients, and community.',
      image: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2023/11/OrthoNebraska_Hospital-1024x662.png',
      link: 'https://fortifiedhealthsecurity.com/case-study/orthonebraska-hospital/',
    },
    {
      title: 'Citizens Medical Center Case Study',
      description: 'Citizens Medical Center faced a 75% increase in annual cyber insurance premiums. After partnering with Fortified to augment their cybersecurity program with Managed SIEM, Managed EDR, and Managed Connected Medical Device services, they were able to meet the requirements for the new cybersecurity coverage without any increase in premiums.',
      image: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/Citizens-Medical-Center-building-1024x439.jpg',
      link: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/Citizens-Medical-Center-Case-Study.pdf',
    },
  ];

  return (
    <div className="page-builder-section section-slider relative bg-[#EBEBEB]  overflow-hidden">
      <div className="absolute w-[52%]">
        <img
          src="https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/logo-bg-alt2.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <Swiper
          spaceBetween={0}
          speed={1200}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          pagination={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
        >
          {caseStudies.map((study, index) => {
            return (
              <SwiperSlide key={index} className="w-full py-34">
                <div className="grid grid-cols-[3fr_2fr] place-content-center">
                  <div className="p-4">
                    <div className="image-block relative">
                      <div className="image relative">
                        <div className="hex-1 absolute right-0 -top-16 z-[-1]">
                          <img
                            src="https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/hex-gradient.svg"
                            alt=""
                            className="img-fluid w-[355px] h-[311px]"
                          />
                        </div>
                        <div className="hex-2 absolute top-2/3 -right-10 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
                          <img
                            src="https://fortifiedhealthsecurity.com/wp-content/themes/fortifiedhealthsecurity/assets/images/hex-green-solid.svg"
                            alt=""
                            className="w-[167px] h-[146px]"
                          />
                        </div>
                        <span className="img-bg z-[99]">
                          <img
                            src={study.image}
                            alt={`${study.title} building`}
                            className="img-fluid rounded-lg xl:w-[556px] mx-auto h-[350px]"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text page-body">
                      <h3 className="text-4xl font-bold text-[#2EA38F]">{study.title}</h3>
                      <p className="font-light mt-6">{study.description}</p>
                      <div className="swiper-pagination-alt flex space-x-2 mt-4">
                        <div className="swiper-pagination-alt flex space-x-2 mt-4">
                          {caseStudies.map((_, idx) => (
                            <span
                              key={idx}
                              className={`swiper-pagination-bullet w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-red-800' : 'bg-gray-300'}`}
                            ></span>
                          ))}
                        </div>

                      </div>
                      <a
                        style={{ boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.16)' }}
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button mt-4 inline-block bg-[#054479] text-white px-10 py-3 rounded-xl uppercase text-xs font-semibold"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )

          })}
        </Swiper>
        <div className="swiper-pagination-alt flex justify-center space-x-2 mt-4">
          {caseStudies.map((_, idx) => (
            <span
              key={idx}
              className={`swiper-pagination-bullet w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-red-800 scale-110' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlider;