import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroHeader = () => {
	const [open, setOpen] = useState(false);

    useEffect(()=> {
        console.log(document.querySelector("#menu"))
    })

    const router = useRouter()


	return (
		<div      
        className='flex  justify-between items-center pt-[32px] pb-[24px] md:pb-0 md:py-[30px] px-[20px] md:px-[72px] headerAnimate'>
			<div
            onClick={()=> {
                router.push("/")
            }}
            >
				<Image
					src='/images/clogo.svg'
					width={56}
					height={56}
					alt='logo'
					className='hidden md:block'
				/>

				<Image
					src='/images/clogo.svg'
					width={48}
					height={48}
					alt='logoaa'
					className='md:hidden block'
				/>
			</div>

			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='cursor-pointer'
				onClick={() => {
					setOpen(true);
                    // console.log(document.querySelector("#menu"))
                    // document.querySelector("#menu").style.transition="translateY(0%)"
				}}
			>
				<g id='Frame'>
					<path
						id='Vector'
						d='M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16ZM5 9H27C27.2652 9 27.5196 8.89464 27.7071 8.70711C27.8946 8.51957 28 8.26522 28 8C28 7.73478 27.8946 7.48043 27.7071 7.29289C27.5196 7.10536 27.2652 7 27 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9ZM27 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23Z'
						fill='black'
					/>
				</g>
			</svg>
			{open && (
				<div className='fixed bg-[#141414] bottom-0 right-0 w-full h-full py-[24px] px-[24px]  z-50'>
					<motion.ul
                    initial={{y:"-400px"}}
                    animate={{y:"0px"}}
                    className={`bg-white w-full md:w-[260px] h-[400px] md:h-[360px]  md:absolute top-8 right-12 px-[24px] py-[24px]  menuanimation `} id="menu"                    
                    >
						<div
							className='cursor-pointer z-50 flex justify-end pb-[24px] '
							onClick={() => {
                                // document.querySelector("#menu").style.transition="translateY(-150%)"
								setOpen(false);
							}}
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='Frame'>
									<path
										id='Vector'
										d='M19.2806 18.2193C19.3502 18.289 19.4055 18.3717 19.4432 18.4628C19.4809 18.5538 19.5003 18.6514 19.5003 18.7499C19.5003 18.8485 19.4809 18.9461 19.4432 19.0371C19.4055 19.1281 19.3502 19.2109 19.2806 19.2806C19.2109 19.3502 19.1281 19.4055 19.0371 19.4432C18.9461 19.4809 18.8485 19.5003 18.7499 19.5003C18.6514 19.5003 18.5538 19.4809 18.4628 19.4432C18.3717 19.4055 18.289 19.3502 18.2193 19.2806L11.9999 13.0602L5.78055 19.2806C5.63982 19.4213 5.44895 19.5003 5.24993 19.5003C5.05091 19.5003 4.86003 19.4213 4.7193 19.2806C4.57857 19.1398 4.49951 18.949 4.49951 18.7499C4.49951 18.5509 4.57857 18.36 4.7193 18.2193L10.9396 11.9999L4.7193 5.78055C4.57857 5.63982 4.49951 5.44895 4.49951 5.24993C4.49951 5.05091 4.57857 4.86003 4.7193 4.7193C4.86003 4.57857 5.05091 4.49951 5.24993 4.49951C5.44895 4.49951 5.63982 4.57857 5.78055 4.7193L11.9999 10.9396L18.2193 4.7193C18.36 4.57857 18.5509 4.49951 18.7499 4.49951C18.949 4.49951 19.1398 4.57857 19.2806 4.7193C19.4213 4.86003 19.5003 5.05091 19.5003 5.24993C19.5003 5.44895 19.4213 5.63982 19.2806 5.78055L13.0602 11.9999L19.2806 18.2193Z'
										fill='black'
									/>
								</g>
							</svg>
						</div>
						<div className='flex flex-col space-y-[24px]'>
							<Link className=' cursor-pointer' href='/'>
								<h1 className='text-[24px] neue-md font-[500]'>Home</h1>
							</Link>

							<Link className=' cursor-pointer' href='/Gallery'>
								<h1 className='text-[24px] neue-md font-[500]'>Gallery</h1>
							</Link>

							<Link className=' cursor-pointer' href='/Yearbook'>
								<h1 className='text-[24px] neue-md font-[500]'>Yearbook</h1>
							</Link>

							<Link className=' cursor-pointer ' href='/Credit'>
								<h1 className='text-[24px] neue-md font-[500]'>Credit</h1>
							</Link>
						</div>
					</motion.ul>
				</div>
			)}
		</div>
	);
};

export default HeroHeader;
