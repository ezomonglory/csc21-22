import Image from "next/image";
import React, { useEffect, useState } from "react";
import Router from "next/router"

const Footer = () => {
	const [date, setDate] = useState(new Date());
	const getDate = () => {
		setDate(new Date());
	};

	useEffect(() => {
		setInterval(() => {
			getDate();
		}, 6000);
	}, [date]);

	return (
		<div className='flex flex-col md:flex-row gap-y-[16px] md:space-y-0 justify-between border-transparent border-t-[#B4B4B4] border-[0.5px] pt-[16px] md:pt-[32px] mb-[2rem] '>
			<p className='text-[14px] text-[#3C3C3C] order-1'>
				{date?.getHours()}:{date?.getMinutes()}{" "}
				<span className='text-[14px] text-[#7D7D7D] mt-4 ml-[8px]'>
					Ugbowo, Benin city
				</span>
			</p>

			<div className='flex space-x-2  order-2' 
            onClick={()=> {
                Router.push("https://open.spotify.com/track/2fY21NO9Y9Z2pWCdMTeXkR?si=15c3537cc7c743b0")
            }}
            >
				<h1>
					{" "}
					<span className='text-[#3C3C3C]'>Champion</span>
				</h1>
				<span>
					<Image
						src='/images/music-icon.svg'
						width={18}
						height={20}
						alt='music-icon'
						className='hidden md:block text-[#7D7D7D]'
					/>

					<Image
						src='/images/music-icon.svg'
						width={16}
						height={16}
						alt='music-icon'
						className='md:hidden block text-[#7D7D7D]'
					/>
				</span>{" "}
				<h1 className='text-[#7D7D7D] '>- Fireboy ft D Smoke</h1>
			</div>

			<p className='text-[14px] text-[#7D7D7D] order-3'>
				Created with love.{" "}
			</p>
		</div>
	);

	//   return (
	//     <div className='bg-[#000000] text-white  py-[56px] md:py-[70px] mt-12'>
	//         <p className='text-[36px] md:text-[90px] text-center clash-md font-medium'>Created With Love.</p>
	//         <div className='flex space-x-2 items-center justify-center font-medium arch-md text-[24px]' >
	//             <p>Credits</p>
	//             <Image src="/images/arrow.svg" height={40} width={40} alt="arrow"/>
	//         </div>
	//     </div>
	//   )
};

export default Footer;
