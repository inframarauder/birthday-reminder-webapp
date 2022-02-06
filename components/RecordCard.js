import React from "react";
import { Delete } from "./Icons";

const RecordCard = ({ item }) => {
	return (
		<div className="bg-gray-200 rounded-lg shadow-lg p-4 w-full px-5">
			<p className="flex justify-between text-gray-700 text-lg">
				<span>
					{item.day} {item.month}
				</span>
				<span>
					<button className="my-2 cursor-pointer hover:text-red-500">
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
