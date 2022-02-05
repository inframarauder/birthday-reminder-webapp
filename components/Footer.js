import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-100 h-1/5 shadow-sm">
			<div className="container mx-auto px-4 py-4">
				<div className="flex flex-col items-center justify-center">
					<p className="text-center text-gray-700 text-sm md:text-xl">
						Developed with ❤️ by{" "}
						<a
							href="https://subhasis.vercel.app"
							target="_blank"
							rel="noopener norefferer"
							className="hover:text-blue-700"
						>
							Subhasis Das
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
