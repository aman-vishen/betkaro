import React from "react";
import Link from "next/link";
//These are Third party packages for smooth slideshow
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'


const Slideshow = () => {
	//Array of Images
	const images = [
		"images/hero/image3.jpg",
		"images/hero/image2.jpg",
		"images/hero/image4.jpg",
		// "images/hero/image1.jpg",
		// "images/hero/image1.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 3000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-140 md:top-140">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-140 md:top-140">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex   justify-center md:items-center items-start w-screen h-screen relative">
						<div className="bottom-0 left-0 right-0 top-0 h-full w-full  bg-fixed bg-black opacity-90">
						<img
							className="w-screen object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"
							src={each}
							alt="online betting id"
						
					
						/>
						 </div>
						<div className="flex  flex-col text-overlay absolute  w-screen h-screen justify-center items-center  "
						>
							
						<h1 className="opacity-100 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-100	 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Kheloo Aur Jeeto</h1>
                        {/* <h1 className="absolute md:top-60 top-24 inset-x-1/4 text-center z-10 md:text-6xl text-4xl bold text-white mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Bet-Karoo</h1> */}
                        {/* <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">"India's Most Trusted Betting Id Provider"</p> */}
                        <p className="bg-clip-padding p-6 bg-zinc-900 rounded-xl bg-opacity-50 border-1 border-violet-300   my-2 text-white dark:text-white text-3xl font-bold  bg-gradient-to-r from-Slate-900 to-amber-500  text-base !leading-tight text-body-color sm:text-lg md:text-4xl">India's First betting id provider</p>
                        <Link
                        href="https://api.whatsapp.com/send?phone=918800626798"
						target="blank"
                        className="border-solid border-2 border-white-600 my-2  rounded-xl  inline-block rounded-sm bg-whatsapp  text-white  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
						// className="absolute inline-block rounded-sm bg-black md:top-200 top-800 text-white mb-200 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
				  >
                    WhatsApp
                  </Link>
				 
						</div>
                        
                       
					</div>
				))}
			</Zoom>


		</div>
		
		
	);
};

export default Slideshow;


{/* <h1 className="absolute mb-52	 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Bet-Karoo</h1>
                       
                        <p className="absolute  md:top-80 top-100 text-white mb-100 text-base !leading-relaxed text-body-color sm:text-lg md:text-4xl">India's Most Trusted Betting Id Provider</p>
                        <Link
                        href=""
                        className="absolute  top-244  mb-150 inline-block rounded-sm bg-black  text-white  px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
						
				  >
                    Whatsapp
                  </Link> */}