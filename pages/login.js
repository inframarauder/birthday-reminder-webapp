import React from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/AuthForm";
import Layout from "../components/Layout";

const Login = () => {
	const router = useRouter();

	return (
		<Layout>
			<div className="container h-screen">
				<AuthForm type={router.pathname} />
			</div>
		</Layout>
	);
};

export default Login;
