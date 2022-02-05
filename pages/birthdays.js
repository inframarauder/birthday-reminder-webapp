import React, { useState } from "react";
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

	const [modalOpen, setModalOpen] = useState(false);

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<Layout>
			<div className="min-h-screen container my-20 px-2">
				<SearchBar />
				<div className="flex flex-col justify-center">
					<button
						onClick={() => setModalOpen(true)}
						className="bg-blue-600 text-blue-100 w-20 mx-auto rounded px-2 py-2  mb-2 cursor-pointer hover:bg-blue-500"
					>
						+ Add
					</button>
					<hr />
					<h1 className="text-center text-lg font-bold text-gray-400">
						{data.length} birthdays found...
					</h1>
				</div>

				<div className="my-4 px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{data.map((item, index) => (
							<RecordCard key={index} item={item} />
						))}
					</div>
				</div>
			</div>

			{/* modal */}
			<div className={`${modalOpen ? "" : "hidden"}`}>modal</div>
		</Layout>
	);
};

export default Birthdays;
