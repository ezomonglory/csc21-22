import { NextURL } from "next/dist/server/web/next-url";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const GridOverlay = ({ src, open, setOpen, image, nextImage, prevImage }) => {

    const galleryRef = useRef()


     // Variables to track touch start and end positions
  let touchStartX = 0;
  let touchEndX = 0;

  // Function to handle touch start
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  // Function to handle touch end
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;

    // Determine the swipe direction (left or right)
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 0) {
      // Swipe right, go to the previous image
      prevImage();
    } else if (swipeDistance < 0) {
      // Swipe left, go to the next image
      nextImage();
    }
  };
  
  // Add touch event listeners to the gallery container
  useEffect(() => {
    const galleryContainer = galleryRef.current

    if (galleryContainer) {
      galleryContainer.addEventListener('touchstart', handleTouchStart);
      galleryContainer.addEventListener('touchend', handleTouchEnd);
    }

    // Clean up event listeners when the component unmounts
    return () => {
      if (galleryContainer) {
        galleryContainer.removeEventListener('touchstart', handleTouchStart);
        galleryContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);




    console.log(image)
	src = false;
	return (
		<div className='bg-[#000000E5]  fixed top-0 right-0 h-screen w-screen px-[16px] md:px-[72px] flex justify-center items-center' ref={galleryRef} >
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

                    onClick={()=>{
                        prevImage()
                    }}
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

                    onClick={()=>{
                        nextImage()
                    }}
				/>
			</div>
		</div>
	);
};

export default GridOverlay;
