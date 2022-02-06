import React from "react";

const Spinner = () => {
	return (
		<div className="container h-screen flex justify-center items-center">
			<div className="flex items-center justify-center space-x-2 animate-pulse">
				<div className="w-8 h-8 bg-blue-400 rounded-full"></div>
				<div className="w-8 h-8 bg-blue-400 rounded-full"></div>
				<div className="w-8 h-8 bg-blue-400 rounded-full"></div>
			</div>
		</div>
	);
};

export default Spinner;
