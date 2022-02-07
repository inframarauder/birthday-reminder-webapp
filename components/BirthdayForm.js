import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const BirthdayForm = ({ email, setModalOpen }) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const getDays = (month) => {
		let array;
		if (["April", "June", "September", "November"].includes(month)) {
			array = [...Array(30)];
		} else if (month === "February") {
			array = [...Array(29)];
		} else {
			array = [...Array(31)];
		}

		return array;
	};

	const [month, setMonth] = useState("January");
	const [day, setDay] = useState(1);
	const [friend, setFriend] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (friend.length === 0) {
			alert("Please enter a friend's name");
			return;
		}
		setLoading(true);
		try {
			await axios.post("/api/birthdays", {
				email,
				friend,
				month,
				day,
			});
			window.location.reload();
		} catch (error) {
			console.error(error);
			if (error.response.data) {
				alert(error.response.data.error);
			}
		}
		setLoading(false);
		setModalOpen(false);
	};

	return loading ? (
		<Spinner />
	) : (
		<form onSubmit={handleSubmit}>
			<div className="w-full  px-3">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Friend`&apos;`s Name
				</label>
				<input
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="text"
					placeholder="John Doe"
					value={friend}
					onChange={(e) => setFriend(e.target.value)}
				/>
			</div>
			<div className="w-full px-3 my-2">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Month
				</label>
				<select
					value={month}
					onChange={(e) => setMonth(e.target.value)}
					className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				>
					{months.map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>

			<div className="w-full px-3 my-2">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Day
				</label>
				<select
					value={day}
					onChange={(e) => setDay(e.target.value)}
					className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				>
					{getDays(month).map((item, index) => (
						<option key={index} value={index + 1}>
							{index + 1}
						</option>
					))}
				</select>
			</div>
			<div className="w-full px-3 my-2 flex justify-center">
				<button
					type="submit"
					className="bg-blue-700 text-white p-2 rounded hover:bg-blue-500"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default BirthdayForm;
