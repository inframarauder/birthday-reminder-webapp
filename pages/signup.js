import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthForm from "../components/AuthForm";

const Signup = () => {
	const router = useRouter();

	return (
		<Layout>
			<div className="container h-screen">
				<AuthForm type={router.pathname} />
			</div>
		</Layout>
	);
};

export default Signup;
