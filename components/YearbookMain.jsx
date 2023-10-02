import Image from "next/image";
import React from "react";
import HeroHeader from "./HeroHeader";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import YearbookHeader from "./YearbookHeader";
import YearbookGrid from "./YearbookGrid";

const YearbookMain = () => {
	return (
		<div>
			<HeroHeader />
			<div className='flex flex-col space-y-[32px] md:space-y-[40px] px-[20px] lg:px-[72px] w-full h-full overflow-x-hidden'>
				{/* <YearbookHeader /> */}
				<YearbookGrid />
			</div>
		</div>
	);

    };

export default YearbookMain;
