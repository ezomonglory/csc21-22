// components/Gallery.js
// import React, { useState } from "react";
// import { Swipeable } from "react-swipeable";

// const CustomGallery = ({ images }) => {
// 	console.log(images);

// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const handleSwipeLeft = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
// 		);
// 	};

// 	const handleSwipeRight = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
// 		);
// 	};

//     console.log(images[currentIndex])

// 	return (
// 		<Swipeable onSwipedLeft={handleSwipeLeft} onSwipedRight={handleSwipeRight}>
// 			<div className='custom-gallery'>
// 				<div
// 					className='custom-gallery-image'
// 					style={{
// 						backgroundImage: `url(${images[currentIndex]})`,
// 						backgroundSize: "cover",
// 						backgroundPosition: "center",
// 						height: "400px", // Adjust as needed
// 					}}
// 				></div>
// 			</div>
// 		</Swipeable>
// 	);
// };

// export default CustomGallery;
