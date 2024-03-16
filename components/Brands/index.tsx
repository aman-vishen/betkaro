'use client'
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
// import AutoPlay from "./swiper_div";
import Slider from "react-slick";
import SectionTitle from "../Common/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const Slide = ({ title }: SlideProps) => {
//   return (
//     <HStack
//       w="１００％"
//       h="200px"
//       bg="cyan.400"
//       border="cyan.700"
//       alignContent="center"
//       justifyContent="center"
//       mx="4"
//     >
//       <Text color="white" fontWeight="bold">
//         {title}
//       </Text>
//     </HStack>
//   );
// };
const Brands = () => {
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
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
        {/* <SectionTitle
          title="Our Betting Id Patners"
          paragraph="Below is the list of all the verified partners. All of the sites listed below are tested for fraud and are 100% safe to use. The list contains some of the online betting id provider of India."
          center
          mb="80px"
        /> */}
          <div className="w-full px-4">
            {/* <div
              className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            > */}
            {/* opacity-70 hover:opacity-100  grayscale transition  hover:grayscale-0 */}
              <Slider {...settings}>
              <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/fairbet_black.png" alt="online betting id" fill sizes="40"/>
              </a>
              <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/dimond.webp" alt="online betting id" fill sizes="40"/>
              </a>
              {/* <a
                // href=
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
              {/* <a
                // href=
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-40 w-full   dark:opacity-60 dark:hover:opacity-100"
              >
                <Image src="/images/brands/tiger.webp" alt="online betting id" fill sizes="40"/>
              </a> */}
                      
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
        </div>
      {/* </div> */}
    </section>
  );
};

export default  Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const { href, image, name } = brand;
  

  return (

    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      
      {/* <AutoPlay/> */}
      
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
