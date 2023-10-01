import React from "react";
import { useRef, useState, useEffect } from "react";

const Audio = ({ play }) => {
	const musicRef = useRef();
	let Play;
	const callPlay = () => {
        Play = localStorage.getItem("play");
        console.log(Play)
	};

    // useEffect(()=> {
    //     localStorage.setItem("play", false)
    //     musicRef.current.autoplay
    // }, [])

	useEffect(() => {
		callPlay();        
        (Play !== "true" ? musicRef.current.play() : musicRef.current.pause());
	}, [play]);
    console.log(Play)
    

	return (
		<audio  controls ref={musicRef} loop className='hidden'>
			<source
				src='/champion.mp4'
				type='audio/ogg'
			/>
			<source
				src='/champion.mp4'
				type='audio/mpeg'
			/>
		</audio>
	);
};

export default Audio;
