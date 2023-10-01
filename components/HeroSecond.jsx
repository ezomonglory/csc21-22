import React from 'react'

const HeroSecond = () => {
  return (
    <div className='pt-[96px] md:pt-[192px] flex flex-col md:space-y-[32px] space-y-[16px] fade'>
        <div className='bg-black w-full  h-[4px]'></div>
			<div className='bg-black w-full  h-[8px]'></div>
			<div className='bg-black w-full  h-[16px]'></div>
			<div className='bg-black w-full  h-[32px]'></div>
			<div className='bg-black w-full  h-[64px]'></div>

			<div className='w-full py-[150px] md:py-[220px]  space-y-6 bg-black flex flex-col items-center justify-center'>
				<h1 className='text-[52px] md:text-[96px] text-white redact md:leading-[85px] leading-[52px]  mx-auto md:tracking-[-3.84px] md:w-[60%] w-[90%] text-center tracking-[-2.8px]'>
					There’s no next semester but if you have a reason to...					
				</h1>

				<div className=' cursor-pointer bg-white  text-black rounded-full py-[12px] px-[32px] inline-flex'>
					<h1 className=' md:text-[20px]  font-[400] neue-md'>Click me</h1>
				</div>
			</div>
    </div>
  )
}

export default HeroSecond