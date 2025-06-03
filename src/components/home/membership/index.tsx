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
    <div className="flex">
      <div className="flex item-center justify-center text-center w-[15%] bg-[#054479] py-8">
        <h2 className="text-2xl font-bold text-white grid place-content-center">Memberships</h2>
      </div>
      <div className="block-content w-[85%] py-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={60}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 4 },
            480: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
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