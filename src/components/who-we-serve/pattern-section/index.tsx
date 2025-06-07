import React from "react";

interface PatternSectionProps {
  backgroundImage: string;
  gradientOverlay?: string;
  title: string;
  paragraphs: string[];
  titleClassName?: string;
  paragraphClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
  textContainerClassName?: string;
}

export default function PatternSection({
  backgroundImage,
  gradientOverlay = "linear-gradient(to right, #03182b 0%, #218688 33%, rgba(45,163,143,0) 100%)",
  title,
  paragraphs,
  titleClassName = "text-5xl xl:text-6xl",
  paragraphClassName = "text-base",
  sectionClassName = "relative flex items-center px-7 md:px-12 lg:px-24 text-white",
  containerClassName = "relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2.2fr_3fr] gap-10 items-center py-14 sm:py-30",
  textContainerClassName = "space-y-6 text-left text-white font-light lg:pl-[10%] pl-[3%]",
}: PatternSectionProps) {
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
          {paragraphs.map((text, index) => (
            <p key={index} className={paragraphClassName}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
