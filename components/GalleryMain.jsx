import Image from "next/image";
import React from "react";
import HeroHeader from "./HeroHeader";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";

const GalleryMain = () => {
	return (
		<div>
				<HeroHeader />
			<div className='flex flex-col space-y-[32px] md:space-y-[40px] px-[20px] lg:px-[72px] w-full h-full overflow-x-hidden'>
			{/* <GalleryHeader /> */}
				<GalleryGrid />
			</div>			
		</div>
	);

	// return (
	// 	<div className=' w-full h-full  flex flex-col space-y-10 '>
	// 		<h1 className='arch-md  text-[32px] md:text-[48px] text-center'>
	// 			Page{" "}
	// 			<strike>
	// 				<span className='text-[#7D7D7D]'>not</span>
	// 			</strike>{" "}
	// 			found, keep scrolling
	// 		</h1>

	// 		<div className='relative w-[200px] sm:w-[300px] mx-auto h-[70vh]  '>
	// 			<Image
	// 				src='/images/exit.svg'
	// 				width={64}
	// 				height={64}
	// 				alt='exit'
	// 				className='absolute top-[-30px] right-[-20px] z-50 hidden md:block'
	// 			/>
	//             <Image
	// 				src='/images/exit.svg'
	// 				width={45}
	// 				height={45}
	// 				alt='exit'
	// 				className='absolute top-[-30px] right-[-20px] z-50 block md:hidden'
	// 			/>
	// 			<div className='w-full h-[50%] sm:h-[80%] bg-[#434343] rounded-md absolute top-0 right-0 z-10 '></div>
	// 			<div className='w-full h-[50%] sm:h-[80%] bg-[#ABAAAA] rounded-md absolute top-0 right-0 rotate-[8deg]'></div>
	// 		</div>
	// 	</div>
	// );
};

export default GalleryMain;
