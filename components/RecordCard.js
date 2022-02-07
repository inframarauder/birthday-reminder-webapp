import React from "react";
import axios from "axios";
import { Delete } from "./Icons";

const RecordCard = ({ item }) => {
	const deleteRecord = async (id) => {
		if (
			window.confirm("Are you sure you want to delete this birthday record?")
		) {
			try {
				const res = await axios.delete(`/api/birthdays`, {
					params: { id },
				});
				alert(res.data.message);
				window.location.reload();
			} catch (error) {
				console.error(error);
				if (error.response.data) {
					alert(error.response.data.error);
				}
			}
		}
	};
	return (
		<div className="bg-gray-200 rounded-lg shadow-lg p-4 w-full px-5">
			<p className="flex justify-between text-gray-700 text-lg">
				<span>
					{item.day} {item.month}
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
