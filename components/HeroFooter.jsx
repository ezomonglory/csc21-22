import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import Audio from "./Audio";
import { HeroImage } from "../data";

const HeroFooter = () => {        
 const [hover, setHover] = useState(false)

	const addImage = () => {
        document.querySelector("#imageContainer").insertAdjacentHTML("beforeend", "<div> {HeroImage.map((image, i)=> <HeroCard image={image} key={i} ) } </div>")
    }

	useEffect(() => {
		console.log("hi");

		const interVal = setInterval(() => {
			console.log("here");
			addImage();
		}, 1000);

		return () => clearInterval(interVal);
	}, []);


	return (
		<div className='w-full h-full relative overflow-hidden'>
            <div className="bg-white absolute right-[10000px] h-[280px] w-full z-[50] cardAnimation ">
            </div>		
			<marquee
            onMouseEnter={()=> { setHover(true); console.log(hover);}}
            onMouseOut={()=> setHover(true)}
            scrollamount={`${hover ? "0" : 1}`}
            >
            <div className={` h-full animate flex space-x-2 scroll-hidden relative w-full translate-x-[-1000px]`} id="imageContainer">
				{HeroImage.map((image,i) => (
					<HeroCard key={i} image={image}  />
				))}               
			</div>
            </marquee>

			
		</div>
	);
};

export default HeroFooter;
