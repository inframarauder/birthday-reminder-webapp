import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
	return (
		<Layout>
			<div className="container h-screen">
				<div className="flex flex-col items-center justify-center my-20 mx-auto py-4 px-4">
					<Image src="/cake.png" alt="logo" width={300} height={300} />
				</div>
				<div className="flex flex-col items-center mx-auto px-4">
					<p className="text-lg text-center">
						This application lets you record your friends' birthdays and sends
						you email reminders on their birthdays!
						<br /> Build using Next.js, AWS Lambda and Amazon Cognito.
					</p>
					<p className="my-4 text-lg">
						<Link href="/login">
							<button className="py-2 px-3 mx-4 w-20 md:w-40 cursor-pointer bg-green-800  hover:bg-green-600 text-green-100 hover:text-green-100 rounded transition duration-300">
								Login
							</button>
						</Link>
						<Link href="/signup">
							<button className="py-2 px-3 mx-4 w-20 md:w-40  bg-blue-800 hover:bg-blue-600 text-blue-100 hover:text-blue-100 rounded  transition duration-300 cursor-pointer">
								Signup
							</button>
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
