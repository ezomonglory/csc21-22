import React, { useState } from "react";
import { GalleryImage, yearbook } from "../data";
import { motion } from "framer-motion";
import Image from "next/image";

import HeroCard from "./HeroCard";
import GridOverlay from "./GridOverlay";
import YearbookCard from "./YearbookCard";
import Footer from "./Footer";

const YearbookGrid = () => {
	return (
		<div className=' h-[80vh] overflow-y-scroll scroll-hidden overflow-x-hidden'>
			<div className=' pt-[16px] mt-[30px]  w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent pb-[32px] md:pb-[40px]  '>
				<motion.h1
					initial={{ y: "10px" }}
					whileInView={{ y: "0px" }}
					viewport={{ once: true }}
					className='redact md:tracking-[-2.8px] topanimate opa tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] md:mb-[2px] p-0 md:leading-[67px]'
				>
					Yearbook
				</motion.h1>
				<motion.p
					initial={{ y: "10px" }}
					whileInView={{ y: "0px" }}
					viewport={{ once: true }}
					className='text-[#7D7D7D] topanimate opa    text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px]  '
				>
					A reflections of our journey and a toast <br />
					to new heights.
				</motion.p>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-x-[16px] gap-y-[32px] justify-between mb-4  '>
				{yearbook.map((i) => (
					<div key={i}>
						<YearbookCard name={i["Full Name"]} quote={i["Yearbook Quote"]} />
					</div>
				))}
			</div>
		</div>
	);
};

export default YearbookGrid;
