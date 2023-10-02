import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const GridCard = ({index, setImage}) => {
	const src = false;

	return (
		<div className='cursor-pointer'>
			<motion.div
            initial={{y:"30px"}}
            whileInView={{y:"0px"}}
            viewport={{once:true}}
				className={`rounded-md animate mx-auto bg-[#D9D9D9] w-[300px] h-[200px] md:h-[200px] smallwidth overflow-hidden `}
                style={{
                    backgroundImage:`url('/images/Yearbook Pictures/${index}.JPG')`,
                    // backgroundPosition:"cover",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    loading:"lazy"
                    
                }}
			>
				{" "}
			</motion.div>
		</div>
	);
};

export default GridCard;
