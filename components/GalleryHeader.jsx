import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GalleryHeader = () => {
	return (
		<motion.div
      
         className=' pt-[16px] mt-[30px] animate  w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent opa'>
			<h1 className='redact md:tracking-[-2.8px] tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] md:mb-[2px] p-0 md:leading-[67px]'>
				Nostalgia
			</h1>
			<p className='text-[#7D7D7D] text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px]  '>
				Hoping these pictures makes you smile as you <br className="block "/>  relive these captured
				memories <br className="block md:hidden" /> over and over.
			</p>
		</motion.div>
		// </div>
	);
};

export default GalleryHeader;
