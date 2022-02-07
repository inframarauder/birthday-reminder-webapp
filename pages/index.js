import React from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { RightPointer } from "../components/Icons";

const Home = () => {
	const { status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <Spinner />;
	}

	if (status === "authenticated") {
		router.push("/birthdays");
	}

	return (
		<Layout>
			<div className="container min-h-screen  px-4 py-4 bg-gray-300">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col items-center justify-center my-20 mx-auto py-4 px-4">
						<Image src="/cake.png" alt="logo" width={400} height={400} />
					</div>
					<div className="my-auto mx-auto">
						<h1 className="text-lg text-center text-blue-600 font-bold ">
							Welcome to the Birthday Reminder App!
						</h1>
						<ul className="text-lg">
							<li className="flex justify-start items-center p-4 my-2 bg-gray-100 rounded">
								<RightPointer />
								<span className="ml-2">
									Easily sign in with Google to get started
								</span>
							</li>
							<li className="flex justify-start items-center p-4 my-2 bg-gray-100 rounded">
								<RightPointer />
								<span className="ml-2">Add your friends`&apos;` birthdays</span>
							</li>
							<li className="flex justify-start items-center p-4 my-2 bg-gray-100 rounded">
								<RightPointer />
								<span className="ml-2">
									Get email reminders on their birthdays!
								</span>
							</li>
						</ul>
						<div className="flex justify-center mt-4">
							<button
								onClick={() => signIn()}
								className="text-lg py-2 px-3 w-40 bg-blue-600 hover:bg-blue-500 text-blue-100 hover:text-blue-100 rounded  transition duration-300 cursor-pointer"
							>
								Sign In
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
