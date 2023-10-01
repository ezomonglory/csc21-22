import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CreditCard = ({ data, index }) => {
	const src = false;

	return (
		<motion.div
			initial={{ y: "30px" }}
			whileInView={{ y: "0px" }}
			viewport={{ once: true }}
			className='mt-[32px] md:mt-[40px] animate'
		>
			<div
				className={`rounded-md   bg-[#D9D9D9] h-[180px] w-[180px] md:mb-[16px] mb-[12px] `}
                style={{
                    backgroundImage:`url('/images/${data.image}.jpg')`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",                    
                    loading:"lazy"
                    
                }}
			>
				{" "}
			</div>

			<div
				className={` ${
					(index === 4 )&&( index === 2)
						? "w-[250px] md:w-[265px] text-left "
						: index === 2 ? "w-[250px] md:w-[265px] text-left " 
                        : index === 0 ? "w-[250px] md:w-[265px] text-left " : "w-[180px] md:w-[265px] text-left "
				}`}
			>
				<h1 className='text-[16px] md:leading-[29px] text-[#7D7D7D] neue-reg leading-[24px]'>
					{" "}
					{data.name}
				</h1>

				<p className='text-[20px] leading-[24px] text-[##3C3C3C] redact md:mt-[4px] mt-[2px] '>
					{" "}
					{data.role}{" "}
				</p>
			</div>
		</motion.div>
	);
};

export default CreditCard;
