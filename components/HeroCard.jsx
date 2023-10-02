import Image from "next/image";
import React from "react";

const HeroCard = ({ image }) => {
	

	return (
		<div className='cursor-pointer mt-[32px]'>
			<div
				className={`rounded-md  w-[158px] h-[190px] md:h-[240px] md:w-[200px] bg-[#d9d9d9]`}
                style={{
                    backgroundImage:`url('/images/Yearbook Pictures/${image}.JPG')`,
                    backgroundPosition:"cover",
                    backgroundSize:"cover",
                    loading:"lazy"
                    
                }}
			>
				{" "}
			</div>
		</div>
	);
};

export default HeroCard;
