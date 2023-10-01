import Image from "next/image";
import React from "react";

const YearbookHeader = () => {
	return (
        <div className=' pt-[16px] mt-[30px]  w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent'>
			<h1 className='redact md:tracking-[-2.8px] tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] mb-[2px] p-0 md:leading-[67px]'>
				Yearbook
			</h1>
			<p className='text-[#7D7D7D] text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px] '>
				A reflections of our journey and a toast <br />
				to new heights.
			</p>
		</div>
	);
};

export default YearbookHeader;
