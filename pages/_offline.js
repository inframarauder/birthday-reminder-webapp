import React from "react";
import { Offline } from "../components/Icons";

const OfflinePage = () => {
	return (
		<div className="container h-screen flex justify-center items-center">
			<div className="flex justify-center items-center">
				<Offline />
				<span className="text-gray-500 text-center text-xl font-bold">
					You are offline
				</span>
			</div>
		</div>
	);
};

export default OfflinePage;
