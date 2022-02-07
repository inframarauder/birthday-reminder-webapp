import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Birthday Reminder</title>
				<meta
					name="description"
					content="A simple next.js web app to remind people about their friends birthdays"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
