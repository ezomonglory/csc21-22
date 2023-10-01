import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const YearbookCard = ({name, quote}) => {
	const src = false;

    console.log(`url('/images/Yearbook Pictures/${name}.jpg')`)

	return (
		<motion.div
			initial={{ y: "30px" }}
			whileInView={{ y: "0px" }}
			viewport={{ once: true }}
			className='cursor-pointer animate flex flex-col items-center justify-center w-full'
		>
			<div
				className={`rounded-md  bg-[#D9D9D9] w-[160px] h-[180px] md:h-[200px]   `}
                style={{
                    backgroundImage:`url('/images/Yearbook Pictures/${name}.JPG')`,
                    backgroundPosition:"cover",
                    backgroundSize:"cover",
                    loading:"lazy"
                    
                }}
			>
				{" "}
			</div>

			<div className=' w-full  text-center mt-4 '>
				<h1 className='text-[14px] leading:[22px] tracking-[0%] md:text-[18px] md:leading-[28px] text-[#7d7d7d] neue-md truncate font-[700] capitalize'>
					{name}
				</h1>

				<p className='text-[12px] md:text-[16px] neue-md text-[#3C3C3C] font-[400] mx-auto w-[160px] line-clamp-3  '>
					{" "}
					{quote}
				</p>
			</div>
		</motion.div>
	);
};

export default YearbookCard;
