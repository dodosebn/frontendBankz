import React, { useState, useEffect, useRef } from "react";
import { latestItems } from "./shared/mappings";
import { motion } from "framer-motion";

const LatestArticle = () => {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="lg:relative cursor-pointer">
      <div className="lg:py-[1rem] items-center bg-White w-full lg:px-[3rem] lg:absolute lg:bottom-[13rem]">
        <h1 className="text-DarkBlue text-center text-3xl lg:text-start lg:pl-6 lg:pt-4">
          Latest Articles
        </h1>

        {isDesktop ? (
          <motion.section
            ref={sectionRef}
            initial={{ x: -100 }}
            animate={animate ? { x: 0 } : undefined}
            transition={{
              duration: 1.2,
              ease: "linear",
            }}
            className="p-4 lg:flex lg:gap-4"
          >
            {latestItems.map((news) => (
              <article key={news.id} className="mt-7">
                <img
                  src={news.imgSrc}
                  alt="sharp"
                  className="lg:w-[16.5rem] lg:h-[16.5rem]"
                  style={{
                    borderRadius: "7px 7px 0 0",
                  }}
                />
                <blockquote
                  className="bg-LightGrayishBlue p-5 text-GrayishBlue lg:w-[16.5rem] lg:h-[16.5rem]"
                  style={{
                    borderRadius: "0 0 7px 7px",
                  }}
                >
                  <cite>{news.cite}</cite>
                  <h1 className="text-DarkBlue text-[1.3rem] pt-2 hover:text-LimeGreen">
                    {news.title}
                  </h1>
                  <p className="w-[20rem] text-[1rem] lg:w-[15rem] pt-2">
                    {news.content}
                  </p>
                </blockquote>
              </article>
            ))}
          </motion.section>
        ) : (
          <section className="p-4 lg:flex lg:gap-4">
            {latestItems.map((news) => (
              <article key={news.id} className="mt-7">
                <img
                  src={news.imgSrc}
                  alt="sharp"
                  className="lg:w-[16.5rem] lg:h-[16.5rem]"
                  style={{
                    borderRadius: "7px 7px 0 0",
                  }}
                />
                <blockquote
                  className="bg-LightGrayishBlue p-5 text-GrayishBlue lg:w-[16.5rem] lg:h-[16.5rem]"
                  style={{
                    borderRadius: "0 0 7px 7px",
                  }}
                >
                  <cite>{news.cite}</cite>
                  <h1 className="text-DarkBlue text-[1.3rem] pt-2 hover:text-LimeGreen">
                    {news.title}
                  </h1>
                  <p className="w-[20rem] text-[1rem] lg:w-[15rem] pt-2">
                    {news.content}
                  </p>
                </blockquote>
              </article>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default LatestArticle;
