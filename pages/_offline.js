import React from "react";
import { Offline } from "../components/Icons";

const Offline = () => {
	return (
		<div className="container h-screen">
			<div className="mx-auto my-auto flex justify-center items-center">
				<Offline />
				<span className="text-gray-500 text-center text-lg font-bold">
					You are offline
				</span>
			</div>
		</div>
	);
};

export default Offline;
