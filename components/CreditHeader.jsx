import { motion } from "framer-motion";
import React from "react";

const CreditHeader = () => {
	return (
		<div className=' pt-[16px] mt-[30px]  w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent pb-[32px] md:pb-[40px] '>
			<motion.h1
				initial={{ y: "10px" }}
				whileInView={{ y: "0px" }}
				viewport={{ once: true }}
				className='redact md:tracking-[-2.8px] topanimate opa tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] md:mb-[2px] p-0 md:leading-[67px]'
			>
				Created with love
			</motion.h1>
			<motion.p
				initial={{ y: "10px" }}
				whileInView={{ y: "0px" }}
				viewport={{ once: true }}
				className='text-[#7D7D7D] topanimate opa    text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px]  '
			>
				Magic bloomed when this team <br className='block md:hidden' /> came
				together.
			</motion.p  >
		</div>
	);
};

export default CreditHeader;
