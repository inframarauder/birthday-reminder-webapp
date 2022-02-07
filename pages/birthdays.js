import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";
import Layout from "../components/Layout";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import { Plus, Cross } from "../components/Icons";
import BirthdayForm from "../components/BirthdayForm";

const Birthdays = () => {
	const { data, status } = useSession({
		required: true,
		onUnauthenticated: () => signIn(),
	});

	const [modalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [birthdayRecords, setBirthdayRecords] = useState([]);

	useEffect(() => {
		async function getBirthdayRecords() {
			setLoading(true);
			try {
				const res = await axios.get("/api/birthdays", {
					params: { email: data.user.email },
				});
				setBirthdayRecords(res.data);
			} catch (error) {
				console.error(error);
				alert("Error in fetching birthday records");
			}
			setLoading(false);
		}
		getBirthdayRecords();
	}, []);

	const searchBirthdaysByName = async (name) => {
		try {
			const res = await axios.get("/api/birthdays", {
				params: {
					email: data.user.email,
					friend: { $regex: name, $options: "i" },
				},
			});
			setBirthdayRecords(res.data);
		} catch (error) {
			console.error(error);
			alert("Error in fetching birthday records");
		}
	};

	return status === "loading" ? (
		<Spinner />
	) : (
		<Layout>
			<div className="min-h-screen container my-20 px-2">
				{loading ? (
					<Spinner />
				) : (
					<>
						<div className="flex justify-evenly my-4">
							<div></div>
							<h1 className="text-center text-lg font-bold text-gray-400">
								{birthdayRecords.length} birthday(s) found...
							</h1>
							<button
								className="mx-4 bg-blue-700 text-blue-100 p-2 rounded hover:bg-blue-500"
								onClick={() => setModalOpen(true)}
							>
								<Plus />
							</button>{" "}
						</div>

						<SearchBar searchBirthdaysByName={searchBirthdaysByName} />

						<div className="my-4 px-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
								{birthdayRecords.map((item) => (
									<RecordCard key={item._id} item={item} />
								))}
							</div>
						</div>
					</>
				)}
			</div>

			{/* modal */}
			<div className={`${modalOpen ? "" : "hidden"}`}>
				<div className="fixed inset-0 bg-gray-400 bg-opacity-30 flex justify-center items-center">
					<div className="bg-slate-50 shadow-lg h-1/2 w-full md:w-1/2">
						{/* modal header */}
						<div className="flex justify-between items-center">
							<h1 className="text-lg font-bold px-4 py-4 flex justify-start items-center">
								<Plus />
								<span className="mx-2">Add a new birthday record</span>
							</h1>
							<button
								className="mx-4 bg-gray-700 text-gray-100 p-2 rounded hover:bg-gray-500"
								onClick={() => setModalOpen(false)}
							>
								<Cross />
							</button>
						</div>
						<hr />
						{/* modal content */}
						<div className="container p-4 flex justify-center">
							<BirthdayForm email={data.user.email} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Birthdays;
