import Image from "next/image";
import React from "react";

const GridOverlay = ({ src, open, setOpen, image }) => {
    console.log(image)
	src = false;
	return (
		<div className='bg-[#000000E5]  fixed top-0 right-0 h-screen w-screen px-[16px] md:px-[72px] flex justify-center items-center'>
			<div className='absolute top-[40px] right-[16px] text-white cursor-pointer'>
				<Image
					src='/images/menuXwyt.svg'
					width={24}
					height={24}
					alt='menuicon'
					onClick={() => setOpen(false)}
				/>
			</div>
			<div className='flex justify-center md:justify-between items-center w-full '>
				<Image
					src='/images/leftarr.svg'
					width={56}
					height={56}
					className='hidden md:block'
					alt='leftarr'
				/>
				{src ? (
					<Image src={src} width={56} height={56} alt='leftarr' />
				) : (
					<div className='rounded-md  bg-[#D9D9D9] md:h-[550px] md:w-[700px] w-[343px] h-[418px] '
                    style={{
                        backgroundImage:image,
                        backgroundPosition:"cover",
                        backgroundSize:"cover",
                        backgroundRepeat:"no-repeat",
                        loading:"lazy"
                        
                    }}
                    >
						{" "}
					</div>
				)}
				<Image
					src='/images/rightarr.svg'
					width={56}
					height={56}
					className='hidden md:block'
					alt='rightarr'
				/>
			</div>
		</div>
	);
};

export default GridOverlay;
