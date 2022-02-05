import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Cross, Hamburger } from "./Icons";

const Header = () => {
	const { data, status } = useSession();

	console.log(data);

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMenu = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	return (
		<nav className="bg-gray-100 shadow-sm fixed w-full top-0 z-10">
			{/* desktop nav */}
			<div className="max-w-6xl mx-auto px-2">
				<div className="flex justify-between">
					{/* left part */}
					<div className="flex space-x-4">
						<div>
							<Link href="/">
								<div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mx-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="font-bold">Birthday Reminder App</span>
								</div>
							</Link>
						</div>
					</div>
					{/* right part */}
					<div className="hidden md:flex items-center justify-between space-x-1">
						<button
							onClick={() =>
								status === "authenticated"
									? signOut({ callbackUrl: `${window.location.origin}` })
									: signIn()
							}
							className="py-2 px-3 bg-blue-800 hover:bg-blue-600 text-blue-100 hover:text-blue-100 rounded  transition duration-300 cursor-pointer"
						>
							{status === "authenticated" ? "Sign Out" : "Sign In"}
						</button>
					</div>

					{/* mobile view menu button  */}
					<div className="md:hidden flex items-center">
						<button className="button" onClick={toggleMenu}>
							{mobileNavOpen ? <Cross /> : <Hamburger />}
						</button>
					</div>
				</div>
			</div>

			{/* mobile nav sidebar */}
			<div
				className={`bg-gray-100 shadow-sm px-2 w-64 h-full fixed top-0 left-0 opacity-100  ${
					mobileNavOpen ? "translate-x-0" : "-translate-x-full"
				} transition duration-200 ease-in-out`}
			>
				{/* logo */}
				<Link href="/">
					<div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mx-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="font-bold">Birthday Reminder App</span>
					</div>
				</Link>
				{/**options */}
				<div className="flex flex-col">
					<button
						onClick={() =>
							status === "authenticated"
								? signOut({ callbackUrl: `${window.location.origin}` })
								: signIn()
						}
						className="py-2 px-3 bg-blue-800 hover:bg-blue-600 text-blue-100 hover:text-blue-100 rounded  transition duration-300 cursor-pointer"
					>
						{status === "authenticated" ? "Sign Out" : "Sign In"}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
