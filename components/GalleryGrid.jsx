import React, { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "../data";
import HeroCard from "./HeroCard";
import Audio from "./Audio"
import GridOverlay from "./GridOverlay";
import GridCard from "./GridCard";
import Footer from "./Footer";
import { motion } from "framer-motion";

const GalleryGrid = () => {
	const [open, setOpen] = useState(false);
	const [play, setPlay] = useState(false);
	return (
      <div className="h-[80vh] overflow-y-scroll scroll-hidden ">
          <div
           
          className=' pt-[16px] mt-[30px]   w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent md:pb-[40px] pb-[32px]'>
			<motion.h1 
             initial={{y:"10px"}}
             whileInView={{y:"0px"}}
             viewport={{once:true}}
            className='redact md:tracking-[-2.8px] topanimate opa tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] md:mb-[2px] p-0 md:leading-[67px]'>
				Nostalgia
			</motion.h1>
			<motion.p 
               initial={{y:"10px"}}
               whileInView={{y:"0px"}}
               viewport={{once:true}}
            className='text-[#7D7D7D] topanimate opa    text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px]  '>
				Hoping these pictures makes you smile as you <br className="block "/>  relive these captured
				memories <br className="block md:hidden" /> over and over.
			</motion.p>
		</div>
        
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-[16px]  justify-between mx-auto mb-4  '>
            {/* <Audio play={play} /> */}
			{GalleryImage.map((i) => (
				<div
					key={i}
					onClick={() => {
						setOpen(true);
					}}
				>
					<GridCard />
				</div>
			))}
            {/* <div className='flex justify-end fixed right-0 bottom-0 md:bottom-[40px] z-50'>
            <svg
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Frame'>
						<path
							id='Vector'
							d='M32 6C26.8577 6 21.8309 7.52487 17.5552 10.3818C13.2795 13.2387 9.94702 17.2994 7.97914 22.0502C6.01127 26.8011 5.49638 32.0288 6.49959 37.0723C7.50281 42.1159 9.97907 46.7486 13.6152 50.3848C17.2514 54.0209 21.8842 56.4972 26.9277 57.5004C31.9712 58.5036 37.1989 57.9887 41.9498 56.0209C46.7007 54.053 50.7613 50.7205 53.6182 46.4448C56.4751 42.1691 58 37.1423 58 32C57.9914 25.107 55.2494 18.4988 50.3753 13.6247C45.5012 8.75064 38.893 6.0086 32 6ZM41.11 33.665L29.11 41.665C28.7809 41.8831 28.3949 41.9996 28 42C27.4696 42 26.9609 41.7893 26.5858 41.4142C26.2107 41.0391 26 40.5304 26 40V24C25.9998 23.6378 26.0979 23.2824 26.2839 22.9716C26.4699 22.6609 26.7367 22.4064 27.056 22.2355C27.3753 22.0645 27.735 21.9835 28.0968 22.001C28.4585 22.0186 28.8087 22.134 29.11 22.335L41.11 30.335C41.3843 30.5176 41.6093 30.7651 41.7649 31.0556C41.9205 31.346 42.002 31.6705 42.002 32C42.002 32.3295 41.9205 32.654 41.7649 32.9444C41.6093 33.2349 41.3843 33.4824 41.11 33.665Z'
							fill='black'
						/>
					</g>
				</svg>
			</div> */}
			
			{open && <GridOverlay setOpen={setOpen} open={open} />}
		</div>

         
      </div>
	);
};

export default GalleryGrid;
