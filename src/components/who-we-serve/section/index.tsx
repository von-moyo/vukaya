import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  gradientOverlay?: string;
  title: string;
  paragraphs: string[];
  titleClassName?: string;
  paragraphClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
  subTextContainerClassName?: string;
  textContainerClassName?: string;
  cta?: boolean;
  ctaClassName?: string;
  backgroundPosition?: string
}

export default function HeroSection({
  backgroundImage,
  gradientOverlay = "linear-gradient(to right, #03182b 0%, #218688 33%, rgba(45,163,143,0) 100%)",
  title,
  paragraphs,
  titleClassName = "text-5xl xl:text-[56px]",
  paragraphClassName = "text-base",
  sectionClassName = "relative flex items-center px-7 md:px-12 md:px-24 text-white",
  containerClassName = "relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2.2fr_3fr] gap-10 items-center py-14 sm:py-30",
  textContainerClassName = "space-y-6 text-left text-white font-light lg:pl-[10%] pl-[3%]",
  subTextContainerClassName = 'space-y-6 my-auto',
  cta,
  ctaClassName = "w-fit button mt-4 inline-block bg-[#054479] text-white px-10 py-3 rounded-md sm:rounded-xl uppercase text-xs font-semibold",
  backgroundPosition
}: HeroSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="absolute inset-0 z-0 bg-center bg-cover">
        <div
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: backgroundPosition ? backgroundPosition : undefined
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: gradientOverlay }}
        />
      </div>
      <div className={containerClassName}>
        <div className={textContainerClassName}>
          <h2 className={titleClassName}>{title}</h2>
          <div className={subTextContainerClassName}>
            {paragraphs.map((text, index) => (
              <p key={index} className={paragraphClassName}>
                {text}
              </p>
            ))}
            {cta && <a
              style={{ boxShadow: '15px 15px 30px rgba(0, 0, 0, 0.16)' }}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
            >
              Read More
            </a>}
          </div>

        </div>
      </div>
    </section>
  );
}
