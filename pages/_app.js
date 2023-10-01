import "../styles/globals.css";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import RouteLoad from "../components/RouteLoad";
import { useState, useEffect } from "react";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	const [load, setLoad] = useState(false);

	const [Loaded, setLoaded] = useState(false);

	// useEffect(() => {
	// 	const handleLoad = () => {
	// 		setLoadingProgress(100);
	// 		console.log("loading finish");
	// 	};

	// 	const calculateLoadingProgress = () => {
	// 		// setLoading(true)
	// 		const totalResources =
	// 			window.performance.getEntriesByType("resource").length;
	// 		const loadedResources = window.performance
	// 			.getEntriesByType("resource")
	// 			.filter((entry) => entry.initiatorType !== "navigation").length;
	// 		const progress = (loadedResources / totalResources) * 100;
	// 		setLoadingProgress(progress);
	// 	};

	// 	window.addEventListener("load", handleLoad);

	// 	calculateLoadingProgress();

	// 	// return () => {
	// 	// 	window.removeEventListener("load", handleLoad);
	// 	// };
	// }, []);

	if (typeof window !== "undefined") {
		// window.addEventListener("DOMContentLoaded", () => {
		// 	console.log("DOM Loaded");
		// 	setLoaded(true);
		// });

        setTimeout(()=> {
            console.log("timeout")
            setLoaded(true)
        }, 2000)
	}

	typeof window !== "undefined" &&
		(window.onload = () => {
			console.log("page Loaded");
			setLoaded(true);
		});

	useEffect(() => {
		window.addEventListener("DOMContenLoaded", () => {
			console.log("DOM Loaded");
			setLoaded(true);
		});

		Router.events.on("routeChangeStart", () => {
			setLoad(true);
		});

		Router.events.on("routeChangeComplete", () => {
			setLoad(false);
		});

		return () => {
			Router.events.off("routeChangeStart", () => {
				setLoad(true);
			});

			Router.events.off("routeChangeComplete", () => {
				setLoad(false);
			});
		};
	}, []);

	return loading ? (
		<Loader Loaded={Loaded} setLoading={setLoading} />
	) : (
		<Layout loading={loading}>
			<Component {...pageProps} />
		</Layout>
	);
	
}

export default MyApp;
