import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaAssistiveListeningSystems } from 'react-icons/fa';

const AwardsCarousel: React.FC = () => {
  const awards = [
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/BPTW-2021-Logo-stacked.jpg', alt: 'BPTW 2021 Logo stacked' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/2022_MH_BPTW_STACKED.jpg', alt: '2022_MH_BPTW_STACKED' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/01/2023_MH_BPTW_Stacked.jpg', alt: '2023_MH_BPTW_Stacked' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/05/2024_MH_BPTW_Stacked-2048x1017.jpg', alt: '2024_MH_BPTW_Stacked' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2025/05/2025_MH_BPTW_stacked-2048x962.jpg', alt: '2025_MH_BPTW_stacked' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/2022-best-in-klas-security-and-privacy-managed-services.png', alt: '2022-best-in-klas-security-and-privacy-managed-services' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/2023-best-in-klas-security-and-privacy-managed-services.png', alt: '2023-best-in-klas-security-and-privacy-managed-services' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2024/02/2024-best-in-klas-security-and-privacy-managed-services-e1706801609570.png', alt: '2024-best-in-klas-security-and-privacy-managed-services' },
    { src: 'https://fortifiedhealthsecurity.com/wp-content/uploads/2025/02/2025-Best-In-KLAS-500x-e1739204300400.png', alt: '2025 Best In KLAS 500x' },
  ];

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex item-center text-center justify-center bg-[#054479] py-8 lg:w-[15%] mr-[3%] w-full">
        <h2 className="sm:text-2xl text-3xl font-bold text-white grid place-content-center">Awarded for <br className="sm:hidden block" /> Excellence</h2>
      </div>
      <div className="block-content lg:w-[82%] w-full sm:py-4 py-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
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
          {awards.map((award, index) => (
            <SwiperSlide key={index} className="grid place-content-center h-full my-auto">
              <div className="img w-full grid place-content-center">
                <img src={award.src} alt={award.alt} className="object-contain max-h-26 max-w-[80%] sm:mx-0 mx-[5%]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AwardsCarousel