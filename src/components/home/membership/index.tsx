import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const MembershipsCarousel = () => {
  const memberships = [
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2023/11/HIMSS_CM_Seal_GOLD_NA_WEB.png', alt: 'HIMSS_CM_Seal_GOLD_NA_WEB' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/HSCC-Logo-White-Space-Reduced.png', alt: 'HSCC Logo White Space Reduced' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2023/11/Proud_MUSE_Member_logojpg.jpg', alt: 'Proud_MUSE_Member_logojpg' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2023/11/AEHIS-Logo-detailed.png', alt: 'AEHIS Logo detailed' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/03/HiStalk-600x600-1.png', alt: 'HiStalk 600×600' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/CHIME-Foundation-Logo-02-1.jpg', alt: 'CHIME Foundation Logo' },
  ];

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex item-center text-center justify-center bg-[#054479] py-8 lg:w-[15%] mr-[3%] w-full">
        <h2 className="text-2xl font-bold text-white grid place-content-center">Memberships</h2>
      </div>
      <div className="block-content lg:w-[82%] w-full sm:py-4 py-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={60}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            1400: { slidesPerView: 6 },
            1200: { slidesPerView: 5 },
            1000: { slidesPerView: 4 },
            640: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          }}
        >
          {memberships.map((membership, index) => (
            <SwiperSlide key={index} className="grid place-content-center h-full my-auto">
              <div className="img w-full grid place-content-center">
                <img src={membership.src} alt={membership.alt} className="object-contain max-h-26 max-w-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MembershipsCarousel;