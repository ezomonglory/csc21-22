import React, { useEffect, useRef } from "react";

const HeroFoot = () => {
	const ref = useRef();

	

	const addText = () => {
		document
			.querySelector("#text")
			.insertAdjacentHTML(
				"beforeend",
				"	- 2018 - ASUU - 2019 - 2020 - COVID - 2021 - ASUU - 2022 - ASUU - 2023",
			);
	};

	useEffect(() => {		

		const interVal = setInterval(() => {			
			addText();
		}, 1000);

		return () => clearInterval(interVal);
	}, []);

	return (
		<marquee scrollamount={2}>
			<div
				id='text'
				className=' mt-[96px] md:mt-[200px] mb-[16px] translate-x-[-1000px]   whitespace-nowrap redact md:text-[56px] text-[#B4B4B4] md:tracking-[-2.8px] md:leading-[67px] text-[32px] tracking-[-1.6px]  leading-[38px]'
			>
				2018 - ASUU - 2019 - 2020 - COVID - 2021 - ASUU - 2022 - ASUU - 2023
			</div>
		</marquee>
	);
};

export default HeroFoot;
