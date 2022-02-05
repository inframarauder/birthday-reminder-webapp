import React from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Home = () => {
	const { status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	if (status === "authenticated") {
		router.push("/birthdays");
	}

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
						<button
							onClick={() => signIn()}
							className="py-2 px-3 w-40 bg-green-600 hover:bg-green-500 text-green-100 hover:text-green-100 rounded  transition duration-300 cursor-pointer"
						>
							Sign In
						</button>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
