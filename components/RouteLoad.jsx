import Image from "next/image";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import React from "react";

const RouteLoad = () => {
   
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen'>
			<div className='w-[60%] flex flex-col space-y-4 items-center'>
				<Image
					src='/images/clogo.svg'
					width={134}
					height={144}
					alt='logo'
					className='hidden md:block animate-bounce'
				/>
				<Image
					src='/images/clogo.svg'
					width={100}
					height={100}
					alt='logo'
					className='md:hidden block animate-bounce '
				/>				
			</div>
		</div>
	);
};

export default RouteLoad;