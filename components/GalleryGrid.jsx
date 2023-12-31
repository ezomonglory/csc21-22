import React, { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "../data";
import HeroCard from "./HeroCard";
import Audio from "./Audio";
import GridOverlay from "./GridOverlay";
import GridCard from "./GridCard";
import Footer from "./Footer";
import { motion } from "framer-motion";
// import CustomGallery from "./CustomGallery";


const GalleryGrid = () => {
	const [open, setOpen] = useState(false);
    const [image, setImage] = useState()
    const [index, setIndex] = useState()
	   
    const nextImage = () => {
        if(index !== GalleryImage.length ){
            const newindex = index + 1
            setIndex(newindex)
            setImage(`url('/images/Yearbook Pictures/${newindex}.JPG')`)
        }

    }

    const prevImage = () => {
        if(index !== 0){
            const newindex = index - 1
            setIndex(newindex)
            setImage(`url('/images/Yearbook Pictures/${newindex}.JPG')`)
        }

    }
    


    
	return (
	  <div className="h-[80vh] overflow-y-scroll scroll-hidden ">
	      <div

	      className=' pt-[16px] mt-[30px]   w-full  border-[0.5px] border-[#B4B4B4] border-r-transparent border-b-transparent border-l-transparent md:pb-[40px] pb-[32px]'>
			<motion.h1
	         initial={{y:"10px"}}
	         whileInView={{y:"0px"}}
	         viewport={{once:true}}
	        className='redact md:tracking-[-2.8px] topanimate opa tracking-[-1.6px] text-[32px]  md:text-[52px] font-[400] md:mb-[2px] p-0 md:leading-[63px]'>
				Nostalgia
			</motion.h1>
			<motion.p
	           initial={{y:"10px"}}
	           whileInView={{y:"0px"}}
	           viewport={{once:true}}
	        className='text-[#7D7D7D] topanimate opa    text-[16px] md:text-[20px] neue-reg md:leading-[24px]  leading-[22px]  '>
				Hoping these pictures makes you smile as you <br className="block "/>  relive these captured
				memories <br className="block md:hidden" /> over and over.
			</motion.p>
		</div>

		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-[16px]  justify-between mx-auto mb-4  '>
			{GalleryImage.map((i) => (
				<div
					key={i}
					onClick={() => {
                        setImage(`url('/images/Yearbook Pictures/${i}.JPG')`)
                        setIndex(i)
						setOpen(true);
					}}
				>
					<GridCard  setImage={setImage} index={i} />
				</div>
			))}

			{open && <GridOverlay setOpen={setOpen} open={open} nextImage={nextImage} prevImage={prevImage}  image={image} />}
		</div>

	  </div>
	);

	// return (
	// 	<div>
	// 		<h1>My Image Gallery</h1>
	// 		<CustomGallery images={HeroImage} />
	// 	</div>
	// );
};

export default GalleryGrid;
