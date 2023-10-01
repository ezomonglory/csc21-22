import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroMain = () => {
	return (
		<div className='flex flex-col md:flex-row items-start md:items-center  border border-[#B4B4B4] border-l-transparent border-r-transparent py-[40px] md:py-[32px] mt-[30px] md:mt-[30px] w-full overflow-y-hidden opa'>
			<motion.div
            initial={{y:"30px", opacity:"0"}}            
            whileInView={{y:"0px", opacity:"1"}}
            viewport={{once:true}}
            className='w-full md:w-[50%] text-[52px] md:text-[80px] lg:text-[105px] font-[400] leading-[50px] md:leading-[96px] text-[#3C3C3C] whitespace-nowrap text-left mb-[8px] md:mb-0  tracking-[-2.4px] md:tracking-[-5px] redact  animate'>
				Computer sci. <br /> class of 21/22
			</motion.div>

            <hr className=" w-[350px] bg-[#B4B4B4] rotate-[90deg] hidden md:block" />

			<div 
           
            className="flex flex-col md:space-y-[24px] space-y-[16px] items-start w-[80%] md:w-[70%]">
				<motion.p                 
                initial={{y:"30px", opacity:"0"}}            
                whileInView={{y:"0px", opacity:"1"}}
                viewport={{once:true}}
                className='md:text-[24px] font-[400] leading-[22px] md:leading-[30px] text-[#3C3C3C] animate'>
					Celebrating Our Success, Reminiscing our struggles, hustle and bustle
					& bidding our farewells.
				</motion.p>

                <div className=" cursor-pointer bg-[#141414] items-center space-x-2 text-white rounded-full py-[16px] px-[32px] inline-flex fade">
                    <h1 className="text-[16px] md:text-[20px] font-[500] neue-md">Watch our reels</h1>
                    <Image src="/images/play-circle-white.svg" width={24} height={24} alt="play" />
                </div>
			</div>
		</div>
	);

	//   return (
	// <div className='flex items-center justify-between w-[80%] mx-auto mt-[70px] '>
	//         <Image src="/images/Star 1.svg" height={56} width = {56} alt="star" className='hidden md:block' />
	//         <div className='flex flex-col justify-center items-center'>
	//             <div className='bg-[#141414] rounded-full py-[16px] px-[32px] text-white text-[22px] inline-block arch-reg '>
	//                 CSC CLASS
	//             </div>
	//             <div className='text-[36px]  md:text-[80px] clash-md'>
	//                 <span className='italic ath-italic'>(20)</span> Twenty <span className='font-medium  clash-md'>one</span>
	//             </div>
	//             <div className='text-[36px]  md:text-[80px] clash-md'>
	//                 <span className='italic ath-italic'>(20)</span> Twenty <span className='font-medium  clash-md'>two</span>
	//             </div>
	//             <div className='text-[#7D7D7D] text-[22px] tracking-[2.6px] arch-reg'>
	//                 2021/2022
	//             </div>
	//         </div>
	//         <Image src="/images/Star 1.svg" height={56} width = {56} alt="star" className='hidden md:block' />
	//     </div>
	//   )
};

export default HeroMain;
