import React from "react";
import axios from "axios";
import { Delete } from "./Icons";

const RecordCard = ({ item, getBirthdayRecords }) => {
	const deleteRecord = async (id) => {
		if (
			window.confirm("Are you sure you want to delete this birthday record?")
		) {
			try {
				await axios.delete(`/api/birthdays`, {
					params: { id },
				});
				getBirthdayRecords();
			} catch (error) {
				console.error(error);
				if (error.response.data) {
					alert(error.response.data.error);
				}
			}
		}
	};

	const getMonth = (month) => {
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

		return months[month - 1];
	};

	return (
		<div className="bg-gray-200 rounded-lg shadow-lg p-4 w-full px-5">
			<p className="flex justify-between text-gray-700 text-lg">
				<span>
					{item.day} {getMonth(item.month)}
				</span>
				<span>
					<button
						className="my-2 cursor-pointer hover:text-red-500"
						onClick={() => deleteRecord(item._id)}
					>
						<Delete />
					</button>
				</span>
			</p>
			<hr />
			<p className="text-base">{item.friend}</p>
		</div>
	);
};

export default RecordCard;
