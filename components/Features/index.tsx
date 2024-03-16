'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import TestModals  from "../About/modal";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
// import AutoPlay from "./swiper_div";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // className: "center",
    // centerMode: true,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // centerPadding: "60px"

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    autoplaySpeed: 2000,
   
    autoplay: true
  };
  return (
    <>
      <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
        <SectionTitle
          title="Our Betting Id Patners"
          paragraph="Below is the list of all the verified partners. All of the sites listed below are tested for fraud and are 100% safe to use. The list contains some of the online betting id provider of India."
          center
          mb="80px"
        />
          <div className="w-full px-4">
            {/* <div
              className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            > */}
            {/* opacity-70 hover:opacity-100  grayscale transition  hover:grayscale-0 */}
              <Slider {...settings}>
              {/* <a
              
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/apna.webp" alt="online betting id" fill sizes="40"/>
              </a> */}
              <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/dimond.webp" alt="online betting id" fill sizes="40"/>
              </a>
              {/* <a
               
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/safron.webp" alt="online betting id" fill sizes="40"/>
              </a> */}
              <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/skyexch.webp" alt="online betting id" fill sizes="40"/>
              </a>
              <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/world777.webp" alt="online betting id" fill sizes="40"/>
              </a>
              <a
            
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/fairbet_black.png" alt="online betting id" fill sizes="40"/>
              </a>
                      
          {/* <div >
            <img width={100} height={50} src="/images/brand/logo.png" />
          </div>
          <div >
            <img width={100} height={50} src="/images/brand/logo.png" />
          </div>
          <div>
            <img width={100} height={50} src="/images/brand/logo.png" />
          </div>
          <div >
            <img width={100} height={50} src="/images/brand/logo.png" />
          </div>
          <div>
            <img width={100} height={50} src="/images/brand/logo.png" />
          </div> */}
          {/* <div className="container">
            <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div> */}
        </Slider>
              
              {/* {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))} */}
            </div>
          </div>
          <section>
            <div className='home__cars-wrapper'>
            
            <TestModals />

            </div>
          </section>
        </div>
      {/* </div> */}
    </section>

      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
