import Image from "next/image";
import { Router } from "next/router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LinearProgress } from "@mui/material";
import React from "react";
const Loader = ({ Loaded, setLoading }) => {
	const ref = useRef();
	const barRef = useRef();
	const [width, setWidth] = useState(0);

	useEffect(() => {
	    window.addEventListener("load", ()=> {
	        console.log("weeeeerer")
	    })

		const interval = setInterval(() => {
            if(width === 100){
                ref.current.classList.add("loadanimate")
                ref.current.style.right = "0%"
                setTimeout(()=> {
                    setLoading(false)
                }, 2000)
                return
            }
			
            setWidth((prevWidth) => (prevWidth >= 70 && prevWidth < 90 ? 80 : prevWidth + 20));
	        if(width === 80){
	            console.log("gotten here")
	            checkLoad();
	        }
		}, 1000);

		const checkLoad = () => {                
	       console.log(Loaded)
            if(Loaded){
                setWidth(100)
            }

		};

		return () => clearInterval(interval);

	}, [width]);
	return (
		<div className='flex flex-col items-center justify-center w-full h-[87vh] md:h-screen overflow-hidden'>
			<div  className='w-full flex flex-col space-y-[24px] md:space-y-[32px] items-center justify-center relative  overflow-hidden '>
				<motion.div
                initial={{right:"100%"}}
                // animate={{right:"0%"}}
					ref={ref}
					className='bg-white skew-y-[25deg] blur-lg  z-50 w-full lg-full h-[4000px]  absolute top-[-200%]  mx-auto '
				></motion.div>
				<div className=''>
					<motion.div
						initial={{ y: "200px" }}
						animate={{ y: "0px" }}
						className='w-[96.58px] h-[104px] md:w-[112px] md:h-[120px] loaderanimate  mx-auto '
						style={{
							backgroundImage: 'url("/images/clogo.svg")',
							backgroundRepeat: "no-repeat",
							backgroundPosition: "contain",
							backgroundSize: "contain",
						}}
					></motion.div>
				</div>

				<div className='bg-[#E6E6E6] w-[180px] md:w-[250px] h-[5px] rounded-full bar'>
					<div
						ref={barRef}
						className='h-full bg-[#3C3C3C] rounded-full animate '
						style={{ width: `${width}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Loader;

// // // // import React, { useEffect, useState } from 'react';
// // // // import Head from 'next/head';
// // // // import styles from '../styles/Home.module.css';

// // // // const Home = () => {
// // // //   const [Loaded, setLoaded] = useState(0);

// // // //   useEffect(() => {
// // // //     const perfData = performance.timing;
// // // //     const estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
// // // //     const time = parseInt((estimatedTime / 1000) % 60) * 100;

// // // //     // Loadbar Animation
// // // //     const loadbar = document.getElementById('loadbar');
// // // //     loadbar.style.width = '100%';
// // // //     loadbar.style.transition = `width ${time}ms`;

// // // //     // Loadbar Glow Animation
// // // //     const glow = document.getElementById('glow');
// // // //     glow.style.width = '100%';
// // // //     glow.style.transition = `width ${time}ms`;

// // // //     // Percentage Increment Animation
// // // //     const percentageID = document.getElementById('precent');
// // // //     const start = 0;
// // // //     const end = 100;
// // // //     const duration = time;
// // // //     animateValue(percentageID, start, end, duration);

// // // //     function animateValue(id, start, end, duration) {
// // // //       const range = end - start;
// // // //       let current = start;
// // // //       const increment = end > start ? 1 : -1;
// // // //       const stepTime = Math.abs(Math.floor(duration / range));

// // // //       const timer = setInterval(() => {
// // // //         current += increment;
// // // //         id.innerText = current + '%';
// // // //         if (current === end) {
// // // //           clearInterval(timer);
// // // //         }
// // // //       }, stepTime);
// // // //     }

// // // //     // Fading Out Loadbar on Finished
// // // //     setTimeout(() => {
// // // //       const preloaderWrap = document.querySelector('.preloader-wrap');
// // // //       preloaderWrap.style.display = 'none';
// // // //     }, time);
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <Head>
// // // //         <title>Next.js Page Loader</title>
// // // //       </Head>

// // // //       <div className={styles.preloaderWrap}>
// // // //         <div className={styles.percentage} id="precent"></div>
// // // //         <div className={styles.loader}>
// // // //           <div className={styles.trackbar}>
// // // //             <div id="loadbar" className={styles.loadbar}></div>
// // // //           </div>
// // // //           <div id="glow" className={styles.glow}></div>
// // // //         </div>
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;

// import { useState, useEffect } from 'react';

// const LoadingBar = () => {
//   const [Loaded, setLoaded] = useState(0);

//   useEffect(() => {
//     const calculateLoaded = () => {
//       const totalResources = window.performance.getEntriesByType('resource').length;
//       const loadedResources = window.performance.getEntriesByType('resource').filter((entry) => entry.initiatorType !== 'navigation').length;
//       const progress = (loadedResources / totalResources) * 100;
//       setLoaded(progress);
//     };

//     window.addEventListener('load', calculateLoaded);

//     return () => {
//       window.removeEventListener('load', calculateLoaded);
//     };
//   }, []);

//   return (
//     <div className="loading-bar-container">
//       <div
//         className="loading-bar"
//         style={{ width: `${Loaded}%` }}
//       />
//       <span className="percentage-counter">{Math.round(Loaded)}%</span>
//     </div>
//   );
// };

// export default LoadingBar;

// import { useState, useEffect } from 'react';

// const LoadingBar = ({Loaded}) => {

//   return (
//     <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
//   <div
//     className="h-full bg-blue-500"
//     style={{ width: `${Loaded}%` }}
//   />
//   <span className="absolute top-2 right-2 text-blue-500">{Math.round(Loaded)}%</span>
// </div>
//   );
// };

// export default LoadingBar;
