import React, { useState } from "react";

const AuthForm = ({ type }) => {
	const [inputFieldType, setInputFieldType] = useState("password");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");

	const togglePasswordShow = () => {
		if (inputFieldType === "password") {
			setInputFieldType("text");
		} else {
			setInputFieldType("password");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = { email, password };
		if (type === "/signup") {
			payload.fullName = fullName;
		}
		console.log(payload);
	};

	return (
		<div className="flex justify-center items-center">
			<form className="my-40 w-100" onSubmit={handleSubmit}>
				{/* full name field - only for signup */}
				{type === "/signup" && (
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label
								className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
								htmlFor="inline-full-name"
							>
								Full Name
							</label>
						</div>
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
								id="inline-full-name"
								type="text"
								placeholder="John Doe"
								name="fullName"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
					</div>
				)}
				{/* email field */}
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-email"
						>
							Email
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
							id="inline-email"
							type="email"
							placeholder="john@doe.com"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>

				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-password"
						>
							Password
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
							id="inline-password"
							type={inputFieldType}
							placeholder="******************"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3"></div>
					<label className="md:w-2/3 block text-gray-500 font-bold">
						<input
							className="mr-2 leading-tight"
							type="checkbox"
							onChange={togglePasswordShow}
						/>
						<span className="text-sm">Show password</span>
					</label>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button
							className="shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition duration-200 ease-in"
							type="submit"
						>
							{type === "/signup" ? "Sign Up" : "Log In"}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;
