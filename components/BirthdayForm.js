import React from "react";

const BirthdayForm = () => {
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
		if (["April", "June", "September", "November"].includes(month)) {
			return [...Array(30)];
		} else if (month === "February") {
			return [...Array(29)];
		} else {
			return [...Array(31)];
		}
	};

	return (
		<form>
			<div className="w-full  px-3">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Friend's'Name
				</label>
				<input
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="text"
					placeholder="John Doe"
				/>
			</div>
			<div className="w-full px-3 my-2">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Month
				</label>
				<select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
					{months.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
			</div>

			<div className="w-full px-3 my-2">
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Day
				</label>
				<select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
					{getDays().map((item, index) => (
						<option key={index}>{item + 1}</option>
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
