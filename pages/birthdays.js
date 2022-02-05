import React from "react";
import { useSession, signIn } from "next-auth/react";
import Layout from "../components/Layout";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";

const data = [
	{
		name: "John Doe",
		month: "January",
		day: "1",
	},
	{
		name: "Jane Doe",
		month: "February",
		day: "2",
	},
	{
		name: "Jack Doe",
		month: "March",
		day: "3",
	},
	{
		name: "Jill Doe",
		month: "April",
		day: "4",
	},
	{
		name: "Joe Doe",
		month: "May",
		day: "5",
	},
	{
		name: "Jenny Doe",
		month: "June",
		day: "6",
	},
];

const Birthdays = () => {
	const { status } = useSession({
		required: true,
		onUnauthenticated: () => signIn(),
	});

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<Layout>
			<div className="min-h-screen container my-20 px-2">
				<SearchBar />
				<h1 className="text-center text-lg font-bold text-gray-400">
					{data.length} birthdays found...
				</h1>
				<div className="my-4 px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{data.map((item, index) => (
							<RecordCard key={index} item={item} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Birthdays;
